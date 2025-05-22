<script setup lang="ts">
import InputText from "primevue/inputtext";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

import { useSDK } from "@/plugins/sdk";
import { ref, computed } from "vue";


const sdk = useSDK();

const endpoint = ref("");
const result = ref<any>(null);
const lastIntrospectedEndpoint = ref<string | null>(null);
const parsedResult = ref<ReturnType<typeof parseIntrospection> | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);
const searchTerm = ref("");
const selectedField = ref<null | {
  name: string;
  returnType: string;
  returnTypeObject: any;
  description?: string | null;
  isDeprecated?: boolean;
  deprecationReason?: string | null;
  args: {
    name: string;
    type: string;
    description?: string | null;
    defaultValue?: any;
  }[];
  kind: "query" | "mutation" | "subscription";
}>(null);

function renderType(type: any): string {
  if (!type) return "null";
  if (type.kind === "NON_NULL") return `${renderType(type.ofType)}!`;
  if (type.kind === "LIST") return `[${renderType(type.ofType)}]`;
  return type.name || "unknown";
}

function getBaseTypeName(type: any): string | null {
  if (!type) return null;
  if (type.kind === "NON_NULL" || type.kind === "LIST") {
    return getBaseTypeName(type.ofType);
  }
  return type.name || null;
}

function downloadJSON(data: any, filename = "introspection.json") {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadIntrospection() {
  if (!parsedResult.value) return;
  downloadJSON(parsedResult.value, "introspection.json");
}


function isLeafType(typeObj: any) {
  return (
    !typeObj ||
    typeObj.kind === "SCALAR" ||
    typeObj.kind === "ENUM" ||
    typeObj.kind === "INPUT_OBJECT"
  );
}

function getFieldsOfType(
  typesMap: Map<string, any>,
  type: any,
  depth = 1,
  maxDepth = 3
): string {
  if (!type) return "";
  if (depth > maxDepth) return `${"  ".repeat(depth)}...`;

  const baseTypeName = getBaseTypeName(type);
  if (!baseTypeName) return "";

  const typeObj = typesMap.get(baseTypeName);
  if (!typeObj || !typeObj.fields || isLeafType(typeObj)) return "";

  return typeObj.fields
    .map((field: any) => {
      const subFields = getFieldsOfType(typesMap, field.type, depth + 1, maxDepth);
      if (subFields) {
        return `${"  ".repeat(depth)}${field.name} {\n${subFields}\n${"  ".repeat(depth)}}`;
      } else {
        return `${"  ".repeat(depth)}${field.name}`;
      }
    })
    .join("\n");
}

function parseIntrospection(rawSchema: any) {
  const schema = rawSchema.__schema || rawSchema.data?.__schema;
  if (!schema) return { queries: [], mutations: [], subscriptions: [], typesMap: new Map() };

  const typesMap = new Map<string, any>();
  schema.types.forEach((t: any) => typesMap.set(t.name, t));

  function extractFields(typeName: string | null, kind: "query" | "mutation" | "subscription") {
    if (!typeName) return [];
    const type = typesMap.get(typeName);
    if (!type || !type.fields) return [];

    return type.fields.map((field: any) => ({
      name: field.name,
      description: field.description,
      isDeprecated: field.isDeprecated,
      deprecationReason: field.deprecationReason,
      returnType: renderType(field.type),
      returnTypeObject: field.type,
      args: field.args.map((arg: any) => ({
        name: arg.name,
        description: arg.description,
        type: renderType(arg.type),
        defaultValue: arg.defaultValue,
      })),
      kind,
    }));
  }

  return {
    queries: extractFields(schema.queryType?.name, "query"),
    mutations: extractFields(schema.mutationType?.name, "mutation"),
    subscriptions: extractFields(schema.subscriptionType?.name, "subscription"),
    typesMap,
  };
}

const introspect = async () => {
  if (!sdk) {
    error.value = "SDK no está disponible";
    return;
  }
  loading.value = true;
  error.value = null;
  parsedResult.value = null;
  selectedField.value = null;

  try {
    const rawData = await sdk.backend.introspectGraphQL({
      endpoint: endpoint.value,
      headers: {},
    });

    const data = JSON.parse(rawData);
    result.value = data;
    parsedResult.value = parseIntrospection(data.data);

    lastIntrospectedEndpoint.value = endpoint.value;
  } catch (err) {
    error.value = "No schema found";
    await sdk.backend.consoleLog(err instanceof Error ? err.message : String(err));
    await sdk.backend.consoleLog(error.value);
  } finally {
    loading.value = false;
  }
};

const filtered = computed(() => {
  if (!parsedResult.value) return { queries: [], mutations: [], subscriptions: [] };
  const term = searchTerm.value.toLowerCase();
  const filterFn = (field: any) => field.name.toLowerCase().includes(term);
  return {
    queries: parsedResult.value.queries.filter(filterFn),
    mutations: parsedResult.value.mutations.filter(filterFn),
    subscriptions: parsedResult.value.subscriptions.filter(filterFn),
  };
});

function openDetails(field: typeof selectedField.value) {
  selectedField.value = field;
}

function closeDetails() {
  selectedField.value = null;
  }

function buildRawBlock(
  field: typeof selectedField.value,
  typesMap: Map<string, any>
): string {
  if (!field) return "";

  const argsDeclaration = field.args.length
    ? "(" + field.args.map((arg) => `$${arg.name}: ${arg.type}`).join(", ") + ")"
    : "";

  const argsCall = field.args.length
    ? "(" + field.args.map((arg) => `${arg.name}: $${arg.name}`).join(", ") + ")"
    : "";

  const fieldsStr = getFieldsOfType(typesMap, field.returnTypeObject);

  const selectionSet = fieldsStr
    ? `{\n${fieldsStr}\n  }`
    : "";

  return `${field.kind} ${argsDeclaration} {
  ${field.name}${argsCall} ${selectionSet}
}`;
}
</script>

<template>
  <div class="p-4 max-w-8xl mx-auto text-black relative select-text">
    <h1 class="text-2xl font-bold mb-4 text-white">GQLonaut</h1>

    <input
      v-model="endpoint"
      type="text"
      placeholder="https://api.example.com/graphql"
      class="border p-2 w-full mb-2 text-black"
    />

  <button
  :disabled="loading || !endpoint"
  @click="introspect"
  class="bg-blue-600 text-white px-4 py-2 mb-4 rounded disabled:opacity-50"
>
  {{ loading ? "Loading..." :  "Get Introspection" }}
</button>

  <button
    v-if="parsedResult"
    @click="downloadIntrospection"
    class="mt-4 ml-4 px-4 py-2 bg-green-600 text-white rounded"
  >
    Download introspección
  </button>


    <div v-if="error" class="text-red-600 mt-4">{{ error }}</div>

    <div v-if="parsedResult" class="mt-4 bg-white rounded p-4 shadow-md">
      <InputText
        v-model="searchTerm"
        placeholder="Search operation..."
        class="w-full mb-4 p-2 text-black"
      />

      <TabView v-if="!selectedField">
        <TabPanel header="Queries">
          <div class="max-h-[800px] overflow-y-auto pr-2">
            <div v-if="filtered.queries.length">
              <div
                v-for="field in filtered.queries"
                :key="field.name"
                class="mb-2 cursor-pointer hover:bg-gray-200 rounded p-1"
                @click="openDetails(field)"
                tabindex="0"
                @keydown.enter="openDetails(field)"
                role="button"
                aria-label="Ver detalles de la query"
              >
                <strong>{{ field.name }}</strong>
                <span v-if="field.args.length">
                  (
                  <span v-for="(arg, index) in field.args" :key="arg.name">
                    {{ arg.name }}: {{ arg.type
                    }}<span v-if="index < field.args.length - 1">, </span>
                  </span>
                  )
                </span>
                : <span class="text-blue-800">{{ field.returnType }}</span>
              </div>
            </div>
            <div v-else class="text-gray-500 italic">Any queries found.</div>
          </div>
        </TabPanel>

        <TabPanel header="Mutations">
          <div class="max-h-[800px] overflow-y-auto pr-2">
            <div v-if="filtered.mutations.length">
              <div
                v-for="field in filtered.mutations"
                :key="field.name"
                class="mb-2 cursor-pointer hover:bg-gray-200 rounded p-1"
                @click="openDetails(field)"
                tabindex="0"
                @keydown.enter="openDetails(field)"
                role="button"
                aria-label="Ver detalles de la mutation"
              >
                <strong>{{ field.name }}</strong>
                <span v-if="field.args.length">
                  (
                  <span v-for="(arg, index) in field.args" :key="arg.name">
                    {{ arg.name }}: {{ arg.type
                    }}<span v-if="index < field.args.length - 1">, </span>
                    </span>
                    )
                    </span>
                    : <span class="text-blue-800">{{ field.returnType }}</span>
                    </div>
                    </div>
                    <div v-else class="text-gray-500 italic">Any mutations found.</div>
                    </div>
                    </TabPanel>
    <TabPanel header="Subscriptions">
      <div class="max-h-[800px] overflow-y-auto pr-2">
        <div v-if="filtered.subscriptions.length">
          <div
            v-for="field in filtered.subscriptions"
            :key="field.name"
            class="mb-2 cursor-pointer hover:bg-gray-200 rounded p-1"
            @click="openDetails(field)"
            tabindex="0"
            @keydown.enter="openDetails(field)"
            role="button"
            aria-label="Ver detalles de la subscription"
          >
            <strong>{{ field.name }}</strong>
            <span v-if="field.args.length">
              (
              <span v-for="(arg, index) in field.args" :key="arg.name">
                {{ arg.name }}: {{ arg.type
                }}<span v-if="index < field.args.length - 1">, </span>
              </span>
              )
            </span>
            : <span class="text-blue-800">{{ field.returnType }}</span>
          </div>
        </div>
        <div v-else class="text-gray-500 italic">Any subscriptions found.</div>
      </div>
    </TabPanel>
  </TabView>

  <div v-if="selectedField" class="mt-2 bg-gray-100 p-4 rounded shadow max-h-[800px] overflow-auto relative">
    <button
      class="absolute top-2 right-2 text-red-600 font-bold"
      @click="closeDetails"
      aria-label="Cerrar detalles"
    >
      ×
    </button>

    <h2 class="mb-4 font-semibold text-lg">{{ selectedField.name }} - Detalle</h2>

    <pre class="bg-white p-4 rounded text-sm overflow-auto whitespace-pre-wrap" style="color:#111;">
{{ buildRawBlock(selectedField, parsedResult?.typesMap || new Map()) }}
</pre>
</div>
</div>

</div> </template> <style scoped> </style>
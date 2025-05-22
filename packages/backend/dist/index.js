// packages/backend/src/index.ts
import { RequestSpec } from "caido:utils";
var consoleLog = (sdk, data) => {
  sdk.console.log(`data >>> ${data}`);
  return true;
};
var introspectGraphQL = async (sdk, params) => {
  const { endpoint, headers = {} } = params;
  sdk.console.log(`Introspecting: ${endpoint}`);
  const body = JSON.stringify({
    "query": "query IntrospectionQuery { __schema { queryType { name } mutationType { name } subscriptionType { name } types { ...FullType } directives { name description locations args { ...InputValue } } } } fragment FullType on __Type { kind name description fields(includeDeprecated: true) { name description args { ...InputValue } type { ...TypeRef } isDeprecated deprecationReason } inputFields { ...InputValue } interfaces { ...TypeRef } enumValues(includeDeprecated: true) { name description isDeprecated deprecationReason } possibleTypes { ...TypeRef } } fragment InputValue on __InputValue { name description type { ...TypeRef } defaultValue } fragment TypeRef on __Type { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name } } } } } } }"
  });
  sdk.console.log(`Fetching introspection from ${endpoint} with headers: ${JSON.stringify(headers)}`);
  const spec = new RequestSpec(endpoint);
  spec.setMethod("POST");
  spec.setHeader("Content-Type", "application/json");
  spec.setBody(body);
  sdk.console.log(`Sending GraphQL introspection to ${endpoint}`);
  sdk.console.log(`Headers: ${JSON.stringify(spec.getHeaders())}`);
  sdk.console.log(`Body: ${body}`);
  const sentRequest = await sdk.requests.send(spec);
  if (!sentRequest.response) {
    sdk.console.error("No response received from introspection request");
    throw new Error("No response from introspection");
  }
  const responseText = sentRequest.response.getBody()?.toText() || "";
  sdk.console.log(`Response body: ${responseText}`);
  let parsedResponse;
  try {
    parsedResponse = JSON.parse(responseText);
  } catch (e) {
    sdk.console.error("Failed to parse introspection response as JSON");
    throw new Error("Invalid JSON response from introspection");
  }
  if (!parsedResponse.data && !parsedResponse.errors) {
    sdk.console.error("Response does not contain 'data' or 'errors' fields, invalid GraphQL response");
    throw new Error("Invalid GraphQL introspection response");
  }
  if (parsedResponse.errors) {
    sdk.console.error("GraphQL introspection returned errors:", JSON.stringify(parsedResponse.errors));
    throw new Error("GraphQL introspection errors: " + JSON.stringify(parsedResponse.errors));
  }
  return responseText;
};
function init(sdk) {
  sdk.api.register("consoleLog", consoleLog);
  sdk.api.register("introspectGraphQL", introspectGraphQL);
}
export {
  init
};

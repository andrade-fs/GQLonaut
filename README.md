# 🔍 GraphQL Introspection PoC (Plugin para Caido)

  

Este proyecto es una prueba de concepto (PoC) para demostrar la capacidad de realizar introspección en APIs GraphQL públicas. Está diseñado como un **plugin para [Caido](https://caido.io/)** y permite explorar automáticamente esquemas GraphQL.

  
## 🚀 Descripción

La introspección en GraphQL permite descubrir el esquema del servidor, incluidos tipos, queries, mutations y subscriptions. Este proyecto utiliza endpoints públicos para mostrar cómo automatizar este proceso, con un enfoque en seguridad y auditoría.

---


## 🌐 Endpoints públicos utilizados

### 1. Countries GraphQL API

- **URL:** [https://countries.trevorblades.com/](https://countries.trevorblades.com/)

- ✅ Introspección habilitada

- 🔧 No requiere autenticación


```graphql
query {
	countries {
		code
		name
		continent {
			name
		}
	}
}
```

  

🧪 Desarrollo

Para ejecutar este plugin en modo desarrollo dentro del entorno de Caido:

  
```bash
$ pnpm install

$ pnpm watch

```

Esto iniciará el servidor en modo observación (watch mode), recargando automáticamente el plugin cuando se detecten cambios.

Requisitos previos:


Tener Caido instalado (v0.15 o superior recomendado).
  
Haber creado el plugin con pnpm create @caido-community/plugin.


📚 Documentación

Para más información sobre cómo desarrollar plugins para Caido, consulta:
  
👉 https://developer.caido.io/
  
📜 Licencia

Este proyecto está disponible bajo la licencia MIT.
  
🤖 Autor

Este plugin fue desarrollado como una prueba de concepto para mejorar herramientas de análisis y auditoría de APIs GraphQL.
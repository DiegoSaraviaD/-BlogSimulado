// Datos simulados para el blog
export const mockPosts = [
  {
    id: 1,
    title: "Introducción a React Hooks",
    body: "Los React Hooks son una característica revolucionaria que permite usar el estado y otras características de React sin escribir una clase. En este artículo exploraremos los hooks más importantes como useState, useEffect, y useContext, y cómo pueden mejorar tu código React.",
    userId: 1
  },
  {
    id: 2,
    title: "Optimización de Performance en React",
    body: "La optimización del rendimiento es crucial en aplicaciones React modernas. Aprende técnicas como memoización con React.memo, useMemo, useCallback, y lazy loading para crear aplicaciones más rápidas y eficientes.",
    userId: 2
  },
  {
    id: 3,
    title: "Arquitectura de Microservicios con Node.js",
    body: "Los microservicios ofrecen una forma escalable de construir aplicaciones complejas. Descubre cómo implementar una arquitectura de microservicios robusta usando Node.js, Docker, y herramientas de orquestación modernas.",
    userId: 1
  },
  {
    id: 4,
    title: "TypeScript: Tipado Estático para JavaScript",
    body: "TypeScript añade tipado estático a JavaScript, mejorando la experiencia de desarrollo y reduciendo errores. Exploraremos las características principales, interfaces, tipos genéricos, y mejores prácticas para proyectos grandes.",
    userId: 3
  },
  {
    id: 5,
    title: "Testing en React con Jest y Testing Library",
    body: "El testing es fundamental para mantener código de calidad. Aprende a escribir tests efectivos para componentes React usando Jest y React Testing Library, incluyendo mocks, snapshots, y testing de hooks personalizados.",
    userId: 2
  },
  {
    id: 6,
    title: "GraphQL vs REST: Comparación Práctica",
    body: "GraphQL y REST son dos enfoques diferentes para APIs. Analizamos las ventajas y desventajas de cada uno, casos de uso ideales, y cómo migrar gradualmente de REST a GraphQL en proyectos existentes.",
    userId: 1
  },
  {
    id: 7,
    title: "Docker para Desarrolladores Frontend",
    body: "Docker no es solo para DevOps. Los desarrolladores frontend pueden beneficiarse enormemente de Docker para estandarizar entornos, facilitar colaboración, y simplificar el despliegue de aplicaciones.",
    userId: 3
  },
  {
    id: 8,
    title: "State Management con Redux Toolkit",
    body: "Redux Toolkit simplifica el manejo de estado en aplicaciones React. Descubre cómo usar RTK Query, createSlice, y otras herramientas modernas para crear aplicaciones más mantenibles y predecibles.",
    userId: 2
  },
  {
    id: 9,
    title: "Web Components: El Futuro del Desarrollo Web",
    body: "Los Web Components ofrecen una forma estándar de crear componentes reutilizables. Exploramos cómo crear, distribuir y usar Web Components en proyectos React, Vue, y vanilla JavaScript.",
    userId: 1
  },
  {
    id: 10,
    title: "CI/CD para Aplicaciones Frontend",
    body: "La integración y despliegue continuo son esenciales para equipos de desarrollo modernos. Configura pipelines automatizados con GitHub Actions, Vercel, y Netlify para optimizar tu flujo de trabajo.",
    userId: 3
  }
];

export const mockUsers = [
  {
    id: 1,
    name: "Ana García",
    email: "ana.garcia@example.com",
    username: "anagarcia"
  },
  {
    id: 2,
    name: "Carlos López",
    email: "carlos.lopez@example.com",
    username: "carloslopez"
  },
  {
    id: 3,
    name: "María Rodríguez",
    email: "maria.rodriguez@example.com",
    username: "mariarodriguez"
  }
];

export const mockComments = [
  {
    id: 1,
    postId: 1,
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    body: "Excelente artículo sobre React Hooks. Me ayudó mucho a entender el concepto de useEffect."
  },
  {
    id: 2,
    postId: 1,
    name: "Laura Martínez",
    email: "laura.martinez@example.com",
    body: "Muy bien explicado. ¿Podrías hacer un tutorial sobre useReducer también?"
  },
  {
    id: 3,
    postId: 2,
    name: "Pedro Sánchez",
    email: "pedro.sanchez@example.com",
    body: "La optimización de performance es crucial. Gracias por las técnicas de memoización."
  },
  {
    id: 4,
    postId: 2,
    name: "Sofia Herrera",
    email: "sofia.herrera@example.com",
    body: "¿Tienes algún ejemplo práctico de lazy loading con React.lazy()?"
  },
  {
    id: 5,
    postId: 3,
    name: "Diego Ramírez",
    email: "diego.ramirez@example.com",
    body: "Los microservicios son complejos pero muy poderosos. ¿Recomiendas algún patrón específico?"
  },
  {
    id: 6,
    postId: 4,
    name: "Elena Castro",
    email: "elena.castro@example.com",
    body: "TypeScript ha cambiado completamente mi forma de programar. ¡Excelente guía!"
  },
  {
    id: 7,
    postId: 5,
    name: "Roberto Flores",
    email: "roberto.flores@example.com",
    body: "El testing es fundamental. ¿Podrías cubrir testing de integración también?"
  },
  {
    id: 8,
    postId: 6,
    name: "Carmen Vega",
    email: "carmen.vega@example.com",
    body: "GraphQL vs REST es un debate interesante. ¿Cuándo recomiendas usar cada uno?"
  }
];

// Función para simular delay de red
export const simulateNetworkDelay = (ms = 1000) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Función para simular errores aleatorios
export const simulateError = (probability = 0.2) => {
  if (Math.random() < probability) {
    throw new Error("Error simulado de red");
  }
};


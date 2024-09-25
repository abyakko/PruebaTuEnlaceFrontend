
# Frontend Project - Vue 3, Tailwind CSS, Axios

Este proyecto es una aplicación frontend construida con Vue 3, Tailwind CSS y Axios, y empaquetado con Vite. Proporciona una interfaz de usuario moderna y responsiva para interactuar con una API.

## Tecnologías Utilizadas

- **Vue 3**: Framework JavaScript para construir interfaces de usuario reactivas y componentizadas. Escogí Vue 3 debido a su facilidad para crear aplicaciones rápidas y escalables con un enfoque simple y limpio para la gestión del estado.
- **Tailwind CSS**: Framework de utilidades para CSS que permite crear diseños rápidos y responsivos sin necesidad de escribir CSS personalizado. Escogí Tailwind por su capacidad para crear interfaces modernas y personalizables sin la sobrecarga de CSS tradicional.
- **Axios**: Cliente HTTP basado en promesas para consumir APIs. Es más sencillo y directo para manejar solicitudes que la API nativa de fetch.
- **Vite**: Herramienta rápida y ligera de construcción de proyectos (bundling). Vite acelera el desarrollo local y empaqueta la aplicación para producción de manera eficiente.
- **npm**: Usado como el gestor de dependencias para instalar paquetes y herramientas necesarias.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/en/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (normalmente se instala con Node.js)
- [Git](https://git-scm.com/) (opcional, pero recomendado para el control de versiones)

## Instrucciones de Instalación

1. Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/usuario/nombre-del-repositorio.git
```

2. Accede al directorio del proyecto:

```bash
cd nombre-del-repositorio
```

3. Instala las dependencias necesarias usando `npm`:

```bash
npm install
```

4. Ejecuta el servidor de desarrollo local usando Vite:

```bash
npm run dev
```

5. Abre tu navegador y visita la siguiente URL:

```
http://localhost:5173
```

Este comando inicia un servidor local y recarga automáticamente la página cada vez que se realizan cambios en el código.

## Despliegue para Producción

Para construir el proyecto para producción, ejecuta:

```bash
npm run build
```

Esto empaquetará tu aplicación en un conjunto de archivos optimizados y listos para ser desplegados en un servidor.

## Estructura del Proyecto

- `src/`: Contiene los archivos fuente del proyecto.
  - `components/`: Componentes Vue utilizados en la aplicación.
  - `assets/`: Archivos estáticos como imágenes y fuentes.
  - `App.vue`: Componente principal de la aplicación.
  - `main.js`: Punto de entrada de la aplicación.

## Personalización

- **Tailwind CSS**: Puedes personalizar los estilos en el archivo `tailwind.config.js`.
- **Axios**: Los endpoints de la API se configuran en los archivos que realizan las solicitudes. Puedes modificar estos endpoints según tu API en el archivo Vue correspondiente.

## Cómo Contribuir

1. Haz un fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

¡Gracias por usar este proyecto! Si tienes alguna pregunta o problema, no dudes en abrir un issue en el repositorio.

# Softseguros - Proyecto de CRUD en Django con React JS

![Softseguros Logo](img/logo_softseguros.png)

Este proyecto es un CRUD (Create, Read, Update, Delete) que combina Django como backend y React JS como frontend. El objetivo principal de Softseguros es gestionar información sobre seguros, permitiendo a los usuarios crear, leer, actualizar y eliminar registros de seguros de forma intuitiva y eficiente.

## Características principales

- Implementación de un backend en Django que proporciona una API RESTful para interactuar con la base de datos.
- Desarrollo de un frontend en React JS utilizando Vite como herramienta de construcción y Tailwind CSS para el diseño y estilos.
- Funcionalidades completas de CRUD para los registros de seguros, incluyendo la creación, lectura, actualización y eliminación de registros.
- Validación de datos en el formulario de creación/edición de seguros para garantizar la integridad de los datos.
- Interfaz de usuario intuitiva y atractiva con una navegación fluida y una experiencia de usuario mejorada.

## Requisitos del sistema

Antes de comenzar a utilizar el proyecto, asegúrate de tener los siguientes requisitos instalados en tu sistema:

- Python 3.8 o superior
- Node.js 14 o superior
- NPM (Node Package Manager)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. Clona este repositorio en tu máquina local:

   ```shell
   git clone https://github.com/Juansepo13/Softseguros.git
   ```
2. Navega hasta el directorio del proyecto
   ```cd Softseguros```
3. Instala las dependencias del backend
```pip install -r requirements.txt```
4. Instala las dependencias del frontend
```cd frontend
npm install
 ```
5. Inicia el servidor de desarrollo 
``` npm run dev```
6. Abre tu navegador web y accede a ```http://localhost:3000``` para ver la aplicación en funcionamiento.

## Estructura del proyecto
* El proyecto se divide en dos partes principales: el backend construido con Django y el frontend construido con React JS.

* El código fuente del backend se encuentra en el directorio backend/ y contiene todos los archivos relacionados con la configuración de Django, los modelos de datos, las vistas y las rutas de la API RESTful.

* El código fuente del frontend se encuentra en el directorio frontend/ y contiene todos los archivos relacionados con el desarrollo de React JS, incluyendo los componentes, las páginas y los estilos.

# Uso
* Una vez que hayas iniciado el servidor de desarrollo, podrás acceder a la aplicación en tu navegador web. Aquí hay algunas acciones que puedes realizar:

# Ver la lista de seguros existentes.
* Crear un nuevo seguro proporcionando la información requerida en el formulario.
* Actualizar los detalles de un seguro existente.
* Eliminar un seguro de la lista.
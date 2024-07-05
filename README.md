# Prueba tecnica TodoApp

## Tecnologias Utilizadas 

- npm: Para la gestión de paquetes y dependencias.
- Vite: Como herramienta de construcción y servidor de desarrollo.
- JavaScript (JS): Para la funcionalidad y lógica de la aplicación.
- Tailwind CSS: Para el diseño y estilo de la interfaz.
- HTML: Para la estructura básica de las páginas.
- React: Como biblioteca principal para la construcción de la interfaz de usuario.
- TypeScript: Para añadir tipado estático y mejorar la calidad del código junto con React.

## Dependencias

- uuid: Dependencia que genera numeros unicos (Para los identificadores unicos de las tareas creadas).

## Planteamiento del ejercicio 1
 - Utilizamos un contexto global en react y lo asignamos a un array de objetos que contendra todas nuestras tareas agrupadas, mediante este contexto global, nos facilitara el acceso a la         variable desde cualquier componente de esta manera hacemos el desarrollo mas rapido sin tener que pasar por props y generar cascadas.
- Tambien asignamos una segunda variable al contexto global que utilizaremos para saber cuando queremos hacer un edit de alguna de nuestras tareas.
- Una vez tenemos esto creamos un formulario de entrada para introducir las tareas a las cuales se le asigna a cada una un id, descripción y si esta completada o pendiente. Cuando se crea la tarea se añade a la lista de tareas la cual se renderiza en el componente todoList.
- Se añade en todoList la funcionalidad con un input de tipo checkbox la posibilidad de marcar las tareas como completadas para llevar un registro mas adecuado.
- En este componente para finalizar creamos tres estados para mostrar a disposición del usuario que tareas desea mirar (todas, las pendientes o las completadas) que se renderizan dependiendo de cada tarea si esta marcada como checked true o false.

## Ejercicio 2 

- El ejercicio 2 esta situado en el archivo del repositorio llamado <strong>"logic_exercices.tsx"</strong>, ejercicios de algoritmos para evaluar la lógica.

## Ejercicio 3

- Nueva rama creada <strong>"feature-1"</strong> en la que se realizan actualizaciones y nuevas funcionalidades del proyecto y se hace un pull request a la rama main y se mergean.

## Autor

- **Nombre:** Eduardo Navio Maya
- **Contacto:** [![GMAIL](https://img.shields.io/badge/naviomaya%40gmail.com%20-%20%20DISCORD?style=social&logo=GMAIL&labelColor=black&color=white)](mailto:naviomaya@gmail.com)
- **Link al Proyecto:** [Proyecto](https://todo-app-naviotech.netlify.app/)


# Markdown Links

## Índice

- [Markdown Links](#markdown-links)
  - [Índice](#índice)
  - [1. Preámbulo](#1-preámbulo)
  - [2. Resumen del proyecto](#2-resumen-del-proyecto)
  - [3. Ejecución](#3-ejecución)
  - [4. ¿Qué incluye la librería?](#4-qué-incluye-la-librería)
    - [1) JavaScript API](#1-javascript-api)
      - [`mdLinks(path, options)`](#mdlinkspath-options)
        - [Argumentos](#argumentos)
        - [Valor de retorno](#valor-de-retorno)
      - [Ejemplo (resultados como comentarios)](#ejemplo-resultados-como-comentarios)
    - [2) CLI (Command Line Interface - Interfaz de Línea de Comando)](#2-cli-command-line-interface---interfaz-de-línea-de-comando)
      - [Options](#options)
        - [`--validate`](#--validate)
        - [`--stats`](#--stats)
  - [5. Instalación](#5-instalación)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

## 2. Resumen del proyecto

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, ...

En este proyecto nos alejamos un poco del navegador para construir un programa, 
específicamente crear una herramienta de línea de comando (CLI) así como
una librería en JavaScript, que se ejecute usando Node.js, donde se interactúa 
con el sistema archivos, con el entorno (_proceso_, _env_, _stdin/stdout/stderr_), ...

## 3. Ejecución

El plan de trabajo incluye dos diagramas de flujo. Ellos, muestran las actividades para la construcción del API y de la línea de comando (CLI). 

* [Diagrama de flujo del API](work-flow/MDLink%20-%20API.png)
* [Diagrama del CLI](work-flow/MDLink%20-%20CLI.png)


## 4. ¿Qué incluye la librería?

Este proyecto consta de **dos partes** listadas aquí

### 1) JavaScript API

El módulo se puede **importar** en otros scripts de Node.js y ofrece la
siguiente interfaz:

#### `mdLinks(path, options)`

##### Argumentos

* `path`: Ruta **absoluta** o **relativa** al archivo o directorio. Si la ruta pasada es relativa, se resuelve como relativa al directorio desde donde se invoca  node - _current working directory_).
* `options`: Un objeto con **únicamente** la siguiente propiedad:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados. Éste será igual a **true**.

##### Valor de retorno

La función **retorna una promesa** (`Promise`) y **resuelve un arreglo**
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene las siguientes propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

#### Ejemplo (resultados como comentarios)

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```

### 2) CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación se ejecuta de la siguiente
manera a través de la **terminal**:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto identifica el archivo markdown (a partir de la ruta que recibe como argumento), analiza el archivo Markdown e imprime los links que vaya encontrando, junto con la ruta del archivo donde aparece y el texto que hay dentro del link.

#### Options

##### `--validate`

Si se pasa la opción `--validate`, el módulo hace una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de la URL, así como el status de la respuesta recibida a la petición HTTP a dicha URL.

##### `--stats`

Si se pasa la opción `--stats` el output (salida) será un texto con estadísticas básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

## 5. Instalación

Módulo instalable via `npm install <github-user>/md-links`. Este módulo incluye tanto **un ejecutable** como **una interfaz** que podamos importar con `require` para usarlo programáticamente.


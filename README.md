# ESTACIÓN ESPACIAL SOFKA

Este proyecto se desarrolla con el fin de implementar los requerimientos del reto técnico para la liga de entrenamiento de Desarrollo FullStack.

## Comenzando 🚀
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos 📝

Qué herramientas necesitas para instalar el software y cómo instalarlas.

<pre>
<code>Node.JS
<a href="https://nodejs.org/en/" rel="nofollow">
Encuentra las instrucciones de instalación según tu sistema operativo aquí</a>
</code>
</pre>


<pre>
<code>MySQL
<a href="https://www.mysql.com/" rel="nofollow">
Encuentra las instrucciones de instalación según tu sistema operativo aquí</a>
</code>
</pre>

### Configuración de la base de datos 📝
Copia y pega este archivo en la terminal de línea de comandos de MySQL para crear correctamente la base de datos, sus tablas y los datos anexos a la misma.

<pre>
<code>Creación y configuración de la DB
<a href="https://github.com/AnalieFS/Sofka/blob/main/src/Database/db.sql" rel="nofollow">
Ver archivo.
</a>
</code>
</pre>


### Configuración del servidor 📝
El backend de este proyecto fue desarrollado en Node.js con ayuda de express y express-myconnection, por ello es importante configurar en el área del Middleware del archivo app.js el host, user, password y port que usted tenga asignado en su servidor, todo lo anterior para que el programa funcione correctamente.
<pre>
<code>
<a href="https://github.com/AnalieFS/Sofka/blob/main/src/app.js" rel="nofollow">
Ver archivo.
</a>
</code>
</pre>

### Instalación 📝
Para clonar este repositorio: <br/>

$ git clone https://github.com/AnalieFS/Sofka.git <br/>

Se deben instalar los módulos tanto del frontend como del backend del siguiente modo: <br/>

$ cd ./Sofka <br/>
$ npm i <br/>
$ cd ./Sofka/src/src/frontend <br/>
$ npm i <br/>

### Ejecución 📝

Para ejecutar el proyecto en la máquina local y ejecutar pruebas se utiliza el módulo 'concurrently' que nos permite para versión de desarrollo ejecutar el backend y el frontend simultaneamente para ello se deben ejecutar los siguientes comandos en consola: <br/>

$ cd ./Sofka<br/>
$ npm run dev <br/>

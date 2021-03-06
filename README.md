# ESTACI脫N ESPACIAL SOFKA

Este proyecto se desarrolla con el fin de implementar los requerimientos del reto t茅cnico para la liga de entrenamiento de Desarrollo FullStack.

## Comenzando 馃殌
Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas.

### Pre-requisitos 馃摑

Qu茅 herramientas necesitas para instalar el software y c贸mo instalarlas.

<pre>
<code>Node.JS
<a href="https://nodejs.org/en/" rel="nofollow">
Encuentra las instrucciones de instalaci贸n seg煤n tu sistema operativo aqu铆</a>
</code>
</pre>

<pre>
<code>Comando en terminal
npm install npm@latest -g
</code>
</pre>


<pre>
<code>MySQL
<a href="https://www.mysql.com/" rel="nofollow">
Encuentra las instrucciones de instalaci贸n seg煤n tu sistema operativo aqu铆</a>
</code>
</pre>

### Configuraci贸n de la base de datos 馃摑
Copia y pega este archivo en la terminal de l铆nea de comandos de MySQL para crear correctamente la base de datos, sus tablas y los datos anexos a la misma.

<pre>
<code>Creaci贸n y configuraci贸n de la DB
<a href="https://github.com/AnalieFS/Sofka/blob/main/src/Database/db.sql" rel="nofollow">
Ver archivo.
</a>
</code>
</pre>


### Configuraci贸n del servidor 馃摑
El backend de este proyecto fue desarrollado en Node.js con ayuda de express y express-myconnection, por ello es importante configurar en el 谩rea del Middleware del archivo app.js el host, user, password y port que usted tenga asignado en su servidor, todo lo anterior para que el programa funcione correctamente.
<pre>
<code>
<a href="https://github.com/AnalieFS/Sofka/blob/main/src/app.js" rel="nofollow">
Ver archivo.
</a>
</code>
</pre>

### Instalaci贸n 馃摑
Para clonar este repositorio: <br/>

$ git clone https://github.com/AnalieFS/Sofka.git <br/>

Se deben instalar los m贸dulos tanto del frontend como del backend del siguiente modo: <br/>

$ cd ./Sofka <br/>
$ npm i <br/>
$ cd ./Sofka/src/src/frontend <br/>
$ npm i <br/>

### Ejecuci贸n 馃摑

Para ejecutar el proyecto en tu m谩quina local para prop贸sitos de desarrollo y pruebas se utiliza el m贸dulo 'concurrently' que nos permite ejecutar el backend y el frontend simultaneamente, para ello se deben ejecutar los siguientes comandos en consola (Recuerda instalar los m贸dulos): <br/>

$ cd ./Sofka<br/>
$ npm run dev <br/>

### Diagrama ER

![Diagrama entidad relaci贸n de DB](https://github.com/AnalieFS/Sofka/blob/main/assets/ERDDiagram1.png)

### Diagrama de clases

![Diagrama de clases](https://github.com/AnalieFS/Sofka/blob/main/assets/relacionados.png)


const express = require("express");
const morgan = require("morgan")
const mysql = require("mysql2");
const conn = require("express-myconnection");
const naveRoutes = require("../src/Routes/nave");


const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(conn(mysql, {
    host : "localhost",
    user : "root",
    password : "1234",
    port : 3306,
    database : "SOFKASPACESTATION"
}, "single"));
app.use(express.json());

//Routes
app.use("/", naveRoutes);


//Iniciando server
app.listen(app.get('port'), () => {
    console.log("Server on adress http://localhost:"+3000);
});
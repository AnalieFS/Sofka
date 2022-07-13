const express = require("express");
const morgan = require("morgan")
const mysql = require("mysql2");
const conn = require("express-myconnection");
const naveRoutes = require("../src/Routes/nave");
var cors = require('cors')

const app = express();

//settings
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(conn(mysql, {
    host : "0.0.0.0",
    user : "otro",
    password : "123456",
    port : 3306,
    database : "sofkaspacestation"
}, "single"));
app.use(express.json());

//Routes
app.use("/", naveRoutes);


//Iniciando server
app.listen(app.get('port'), () => {
    console.log("Server on address http://localhost:"+3000);
});
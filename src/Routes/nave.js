const express = require("express");
const router = express.Router();
const naveController = require("../Controllers/nave.controller")


//Definición de las rutas que debe seguir el usuario para poder hacer uso de controladores y así manejar la DB
router.get("/", naveController.getAll);
router.post("/nave", naveController.postNave);
router.get("/nombre", naveController.getByName);
router.get("/filter", naveController.getByFilter);

module.exports = router;
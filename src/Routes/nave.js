const express = require("express");
const router = express.Router();
const naveController = require("../Controllers/nave.controller")

router.get("/", naveController.getAll);
router.post("/nave", naveController.postNave);
router.get("/nombre", naveController.getByName);
router.get("/filter", naveController.getByFilter);

module.exports = router;
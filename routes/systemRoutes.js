const express = require("express");
const router = express.Router();
const { validarJWT } = require("../middlewares/validateJWT");

const { getSystemInfo } = require("../controllers/system");

router.get("/info", [validarJWT], getSystemInfo);

module.exports = router;
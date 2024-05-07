const express = require("express");
const { validarJWT } = require("../middlewares/validateJWT");
const { renewToken } = require("../controllers/auth");
const router = express.Router();

router.get("/renew", [validarJWT], renewToken);

module.exports = router;

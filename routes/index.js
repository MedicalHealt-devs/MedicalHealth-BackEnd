const express = require("express");
const router = express.Router();

const doctorRoutes = require("./doctorRoutes");
const authRoutes = require("./authRoutes");
const systemRoutes = require("./systemRoutes");

router.use("/system", systemRoutes);
router.use("/auth", authRoutes);
router.use("/doctor", doctorRoutes);

module.exports = router;

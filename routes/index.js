const express = require("express");
const router = express.Router();

const doctorRoutes = require("./doctorRoutes");
const authRoutes = require("./authRoutes");

router.use("/auth", authRoutes);
router.use("/doctor", doctorRoutes);

module.exports = router;

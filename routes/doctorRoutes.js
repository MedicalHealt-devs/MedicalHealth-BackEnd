const express = require("express");
const { check } = require("express-validator");
const { validateRoles } = require("../middlewares/ValidateRoles");
const { validateFields } = require("../middlewares/ValidateFields");
const router = express.Router();

//const { register, login, logout, getMe, forgotPassword, resetPassword, updateDetails, updatePassword } = require('../../controllers/auth')
const { register, login, getAllDoctors } = require("../controllers/doctor");

router.post(
  "/register",
  [
    check("fname", "Please include a first name").exists(),
    check("lname", "Please include last name").exists(),
    check("email", "Please include an email").isEmail().exists(),
    check("password", "Please include a password").exists(),
    validateRoles,
    validateFields,
  ],
  register
);
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail().exists(),
    check("password", "Password is required").exists(),
    validateFields,
  ],
  login
);
router.get("/obtain", getAllDoctors);

module.exports = router;

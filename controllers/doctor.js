const Doctor = require("../models/Doctor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateJWT } = require("../helpers/jwt");

/**
 * Register a new doctor
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const register = async (req, res) => {
  const { fname, lname, email, password, role, biography } = req.body;
  try {
    let doctor = await Doctor.findOne({ email });

    if (doctor) {
      return res.status(400).json({
        ok: false,
        msg: "Ya existe un doctor asociado con este correo. Intenta con un correo diferente.",
      });
    }

    doctor = new Doctor({ fname, lname, email, password, role, biography });

    const salt = await bcrypt.genSalt(10);
    doctor.password = await bcrypt.hash(password, salt);

    await doctor.save();

    const token = await generateJWT(
      doctor.id,
      doctor.fname,
      doctor.lname,
      doctor.email,
      doctor.role,
      doctor.biography
    );

    res.status(201).json({
      ok: true,
      msg: "Doctor created successfully",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send("Error al crear el doctor");
  }
};

/**
 * Login doctor
 * @param {*} req - Request
 * @param {*} res - Response
 * @returns {JSON} - Doctor logged successfully
 */
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(400).json({
        ok: false,
        msg: "Doctor not found",
      });
    }
    const validPassword = await bcrypt.compare(password, doctor.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Incorrect password",
      });
    }

    const token = await generateJWT(
      doctor.id,
      doctor.fname,
      doctor.lname,
      doctor.email,
      doctor.role,
      doctor.biography
    );

    res.status(200).json({
      ok: true,
      msg: "Doctor logged successfully",
      doctor: {
        id: doctor.id,
        fname: doctor.fname,
        lname: doctor.lname,
        email: doctor.email,
        role: doctor.role,
        biography: doctor.biography,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
};
/**
 * Obtain all doctors saved
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los doctores");
  }
};

module.exports = {
  register,
  login,
  getAllDoctors,
};

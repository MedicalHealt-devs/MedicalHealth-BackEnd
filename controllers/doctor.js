const Doctor = require("../models/Doctor");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { generateJWT } = require("../helpers/jwt");

const register = async (req, res) => {
    const { fname, lname, email, password, role, licenseNumber } = req.body;
    try {
        
        let doctor = await Doctor.findOne({ email });

        if(doctor){
            return res.status(400).json({
                ok: false,
                msg: 'A doctor is already exist'
            });
        }

        doctor = new Doctor({ fname, lname, email, password, role, licenseNumber });

        const salt = await bcrypt.genSalt(10);
        doctor.password = await bcrypt.hash(password, salt);

        await doctor.save();

        res.status(201).json({
            ok: true,
            msg: 'Doctor created successfully',
            doctor
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error en el servidor');
    }
};

const login = async (req, res) => {
    console.log("login");
    const { email, password } = req.body;
    try {
        let doctor = await Doctor.findOne({ email });
        if (!doctor) {
            return res.status(400).json({
                ok: false,
                msg: 'Doctor not found'
            });
        }
        const validPassword = await bcrypt.compare(password, doctor.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrect'
            });
        }
        
        const token = await generateJWT(doctor.id, doctor.fname);

        res.status(200).json({
            ok: true,
            msg: 'Doctor logged successfully',
            doctor,
            token
        });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send('Error en el servidor');
    }
};

module.exports = {
    register,
    login
}
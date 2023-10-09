function validateRoles(req, res, next) {
    const allowedRoles = ['Dentist', 'Veterinary', 'General Doctor', 'Podiatrist']
    const { role } = req.body;

    if(!allowedRoles.includes(role)){
        return res.status(400).json({message: 'Rol no permitido'})
    }

    next();
}

module.exports = {validateRoles}
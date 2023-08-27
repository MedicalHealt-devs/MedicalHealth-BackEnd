function validateRoles(req, res, next) {
    const allowedRoles = ['Dentist', 'General_Doctor', 'Podiatrist']
    const { role } = req.body;

    if(!allowedRoles.includes(role)){
        return res.status(400).json({message: 'Rol no permitido'})
    }

    next();
}

module.exports = {validateRoles}
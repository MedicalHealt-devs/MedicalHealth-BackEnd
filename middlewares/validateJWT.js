const { response } = require('express')
const jwt = require('jsonwebtoken')

const validarJWT = (req, res = response, next) => {

    //* Bearer token
    const headerAutorization = req.header('Authorization')

    if(!headerAutorization){
        return res.status(401).json({
            ok: false,
            msg: 'Se requiere un token de autenticacion en la peticion HTTP'
        })
    }

    const token = headerAutorization.split(' ')[1]

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'Se requiere un token de autenticacion en la peticion HTTP'
        })
    }

    try {

        const {uid, fname, lname, email, role, biography} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.uid = uid
        req.fname = fname
        req.lname = lname
        req.email = email
        req.role = role
        req.biography = biography
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        })
    }

    next();

}

module.exports = {
    validarJWT
}

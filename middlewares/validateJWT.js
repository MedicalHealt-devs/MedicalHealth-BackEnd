const { response } = require('express')
const jwt = require('jsonwebtoken')

const validarJWT = (req, res = response, next) => {

    //* Bearer token
    const token = req.header('Authorization').split(' ')[1];

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'Se requiere un token de autenticacion en la peticion HTTP'
        })
    }

    try {

        const {uid, name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.uid = uid
        req.name = name
        
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

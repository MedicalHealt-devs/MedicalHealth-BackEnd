const jwt = require("jsonwebtoken");

const generateJWT = (uid, fname, lname, email, role, biography) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, fname, lname, email, role, biography };

    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "6h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        }

        resolve(token);
      }
    );
  });
};

module.exports = {
  generateJWT,
};

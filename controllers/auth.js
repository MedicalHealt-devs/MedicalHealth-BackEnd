const { generateJWT } = require("../helpers/jwt");

const renewToken = async (req, res) => {
  try {
    const { uid, fname, lname, email, role, biography } = req;
    const newToken = await generateJWT(uid, fname, lname, email, role, biography);

    res.status(200).json({
      ok: true,
      msg: "Token refreshed successfully",
      newToken,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send("Error en el servidor");
  }
};

module.exports = { renewToken };

const { generateJWT } = require("../helpers/jwt");

const renewToken = async (req, res) => {
  try {
    const { id, name } = req;

    const token = await generateJWT(id, name);
    console.log(id);

    res.status(200).json({
      ok: true,
      msg: "Token refreshed successfully",
      token
    });
  } catch (e) {
    console.error(e);
    res.status(500).send("Error en el servidor");
  }
};

module.exports = { renewToken };

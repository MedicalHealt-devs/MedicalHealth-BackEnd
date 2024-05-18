const packageJson = require('../package.json');

const getSystemInfo = (req, res) => {
    res.json({ 
        ok: true,
        name: packageJson.name,
        version: packageJson.version,
        description: packageJson.description,
        msg: 'Informations about the system successfully retrieved',
     });
};

module.exports = {
    getSystemInfo,
};
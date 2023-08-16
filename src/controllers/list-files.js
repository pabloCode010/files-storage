const fs = require('fs');
const path = require("path")

const storagePath = path.join(__dirname, "..", "..", "storage");

module.exports = (req, res, next) => {
    try {
        const ls = fs.readdirSync(storagePath);
        res.status(200).json(ls);
    } catch (error) {
        next(error);
    }
};
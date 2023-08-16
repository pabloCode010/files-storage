const fs = require('fs');
const path = require("path")

const storagePath = path.join(__dirname, "..", "..", "storage");

module.exports = (req, res, next) => {
    try {
        const { filename } = req.query;
        const filePath = path.join(storagePath, filename);
        if (!fs.existsSync(filePath)){
            const err = new Error("this file is not saved");
            err.statusCode = 404;
            throw err;
        }
        const data = fs.readFileSync(filePath);
        res.status(200).end(data);
    } catch (error) {
        next(error);
    }
};
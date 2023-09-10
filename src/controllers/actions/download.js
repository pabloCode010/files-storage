const fs = require('fs');
const path = require("path")
const Boom = require('@hapi/boom');

const storagePath = path.join(__dirname, "..", "..", "..", "storage");

module.exports = (req, res, next) => {
    try {
        const { filename } = req.query;
        const filePath = path.join(storagePath, filename);
        if (!fs.existsSync(filePath)){
            const error = Boom.notFound("this file is not saved");
            return next(error);
        }
        const data = fs.readFileSync(filePath);
        res.status(200).end(data);
    } catch (error) {
        next(error);
    }
};
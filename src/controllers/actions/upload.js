const queue = require('../tools/queue');
const writeFilePromise = require('../tools/write-files-promise');

module.exports = (req, res) => {
    try {
        const { filename } = req.query;
        let data = Buffer.alloc(0);
        req.on("data", (chunk) => {
            data = Buffer.concat([data, chunk]);
        });

        req.on("end",() => {
            queue.enqueue(writeFilePromise(filename, data));
            if (!queue.active){ queue.run() }
            res.status(202).json({
                status: 202,
                message: "File queued for writing"
            });
        });
    } catch (error) {
        next(error);
    }
};
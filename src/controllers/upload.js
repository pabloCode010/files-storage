const queue = require('./queue');
const writeFilePromise = require('./write-files-promise');

module.exports = (req, res) => {
    try {
        const { filename } = req.query;
        let data = Buffer.alloc(0);
        req.on("data", (chunk) => {
            data = Buffer.concat([data, chunk]);
        });

        req.on("end",() => {
            if (data.length > 0){
                queue.enqueue(writeFilePromise(filename, data));
            }
            if (!queue.active){
                queue.run();
            }
            res.status(202).send("File queued for writing");
        });
    } catch (error) {
        next(error);
    }
};
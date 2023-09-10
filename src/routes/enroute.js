const filesRouter = require("./files-router");

module.exports = function enroute(app){
    app.use("/files-storage", filesRouter);
}
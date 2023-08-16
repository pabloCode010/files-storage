const router = require("./router")
const filesRouter = require("./files-router");

module.exports = function enrouteApi(app){
    app.use("/", router);
    app.use("/files-storage", filesRouter);
}
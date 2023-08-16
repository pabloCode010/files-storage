module.exports = function(err, req, res, next){
    res.status(err.statusCode || 500).send(err.message || "an error occurred on the server");
}
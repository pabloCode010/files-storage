module.exports = function(err, req, res, next){
    console.log(err);
    if (err.isBoom){
        const { statusCode } = err.output.payload;
        return res.status(statusCode).json(err.output.payload);
    }
    res.status(500).json({"statusCode":500,"error":"Internal Server Error","message":"server side error"});
}
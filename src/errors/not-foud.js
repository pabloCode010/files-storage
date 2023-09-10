const Boom = require('@hapi/boom');

module.exports = function(req, res, next){
    const error = Boom.notFound("this route does not exist");
    next(error);
}
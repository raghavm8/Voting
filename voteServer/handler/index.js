module.exports = {
    ...require('./auth')
}

module.exports.errorHandler = (err,req,res,next) => {
    res.status(err.status || 500 ).json({
        err : err.message || 'something went wrong'
    });
};

module.exports.foundHandler = (req,res,next) => {
    const err = new Error('not found')
    err.status = 404
    next(err)
};
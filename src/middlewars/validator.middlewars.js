const loginValidator = (validatorSchema) => async (req, res, next) => {
    try {
        await validatorSchema.loginValidator(req.body);
        next();
    } catch (error) {
        const err = {
            message : error.erros,
            statusCode: 400
        }

        next(error)
    }
};

module.exports = {
    loginValidator
};
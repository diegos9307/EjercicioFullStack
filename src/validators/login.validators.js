const yup = require('yup');

const loginSchemaValidator = yup.object({
   name : yup.string().required(),
   password : yup.string().min(5).max(12).required()
});

module.exports = loginSchemaValidator;
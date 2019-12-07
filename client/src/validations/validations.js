const Joi = require("joi");

module.exports = {
    createAccountValidation: request => {
    const createSchema = {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().required().email(),
      phoneNumber: Joi.number().required(),
      GUCID: Joi.string().required(),
      gender: Joi.string(),
      location: Joi.string(),
    };

    return Joi.validate(request, createSchema);
  },

  loginValidation: request => {
    const loginSchema = {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    };
    return Joi.validate(request, loginSchema);
  }
};
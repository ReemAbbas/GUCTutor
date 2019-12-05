const Joi = require('joi')

module.exports = {
    
    createAccountValidation: request => {
        const createSchema = {
        firstName:Joi.string().required(),
        lastName:Joi.string().required() ,
        password:Joi.string().required(),
        email:Joi.string().required().email(),
        phoneNumber:Joi.number().required() ,
        GUCID:Joi.string().required(),
        gender:Joi.string(),
        location:Joi.string(),
        courseGive:Joi.array(),
        courseTake:Joi.array(),
        requests:Joi.array(),
        offers:Joi.array(),
        notifications:Joi.array(),
        }

        return Joi.validate(request, createSchema)
    }


}
const Joi = require('joi');

const { CURRENT_YEAR, EMAIL_REGEXP, PASSWORD_REGEXP } = require('../config/constants');
const userRolesEnum = require('../config/user-roles.enum');

const girlValidator = Joi.object({
    name: Joi.string(),
    age: Joi.number().min(15).max(60)
});

const passwordSchema = Joi.string().regex(PASSWORD_REGEXP).required();

const createUserValidator = Joi.object({
    name: Joi.string().alphanum().min(2).max(30)
        .trim()
        .required(),
    password: passwordSchema,
    born_year: Joi.number().min(CURRENT_YEAR - 120).max(CURRENT_YEAR - 6),
    email: Joi.string().regex(EMAIL_REGEXP).required(),
    role: Joi.string().allow(...Object.values(userRolesEnum)),

    car: Joi.boolean(),

    girls: Joi.array()
        .items(girlValidator)
        .when('car', { is: true, then: Joi.required() }),

    // a: Joi.alternatives().conditional('b', { is: 5, then: Joi.string(), otherwise: Joi.number() }),
});

const updateUser = Joi.object({
    name: Joi.string().alphanum().min(2).max(30),
    email: Joi.string().regex(EMAIL_REGEXP)
});

const passwordValidator = Joi.object({
    password: passwordSchema,
});

module.exports = {
    createUserValidator,
    updateUser,
    passwordValidator
};

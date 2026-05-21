import Joi from "joi";

const userValidator = Joi.object({
    fullName: Joi.string().trim().required(),
    email: Joi.string().trim().email().lowercase().required(),
    password: Joi.string().trim().required().min(6)
});
const loginValidator = Joi.object({
    email: Joi.string().trim().email().lowercase().required(),
    password: Joi.string().trim().required().min(6)
});
export {userValidator, loginValidator}
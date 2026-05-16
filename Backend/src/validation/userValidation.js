import Joi from "joi";

const userValidator = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6)
});
const loginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6)
});
export {userValidator, loginValidator}
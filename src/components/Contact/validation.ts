import Joi from "joi";

export const contactFormSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  message: Joi.string().max(2000).required(),
});

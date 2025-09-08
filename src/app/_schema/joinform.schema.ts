import Joi from 'joi';

export const joinFormSchema = Joi.object({
  firstName: Joi.string()
    .min(2)
    .max(50)
    .required()
    .pattern(/^[^\d]+$/)
    .messages({
      'any.required': 'name required',
      'string.required': 'name required',
      'string.empty': 'name required',
      'string.min': 'name short',
      'string.max': 'name long',
      'string.pattern.base': 'name invalid',
    }),
  lastName: Joi.string()
    .min(2)
    .max(50)
    .required()
    .pattern(/^[^\d]+$/)
    .messages({
      'any.required': 'name required',
      'string.required': 'name required',
      'string.empty': 'name required',
      'string.min': 'name short',
      'string.max': 'name long',
      'string.pattern.base': 'name invalid',
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .pattern(/^[a-zA-Z0-9._%+-]*[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .messages({
      'string.empty': 'email required',
      'string.email': 'email invalid',
      'any.required': 'email required',
      'string.required': 'email required',
      'string.pattern.base': 'email invalid',
    }),
  phone: Joi.string()
    .pattern(/^\+?[0-9]{10,15}$/)
    .required()
    .messages({
      'string.empty': 'phone required',
      'any.required': 'phone required',
      'string.pattern.base': 'phone invalid',
    }),
  subject: Joi.string().min(2).max(100).required().messages({
    'string.empty': 'subject required',
    'string.min': 'subject short',
    'string.max': 'subject long',
    'any.required': 'subject required',
  }),
  message: Joi.string().min(5).max(500).required().messages({
    'string.empty': 'message required',
    'string.min': 'message short',
    'string.max': 'message long',
    'any.required': 'message required',
  }),
});

import Joi from 'joi';

export const productCreate = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string()
    .valid('books', 'electronics', 'clothing', 'other')
    .required(),
  description: Joi.string(),
});

import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValidId = (req, res, next) => {
  if (!isValidObjectId(req.params.productId)) {
    throw createHttpError.BadRequest('Id is not valid');
  }
  next();
};

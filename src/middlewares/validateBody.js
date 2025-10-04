import createHttpError from "http-errors";


export const validateBody = (schema) => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body, {
            abortEsrly: false,
        });
        next();
    } catch (error) {
        next(createHttpError(400, 'Bad request', { errors: error.details }));
    }

};



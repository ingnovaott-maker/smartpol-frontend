import boom from '@hapi/boom';

const validateRequest = (scahema, property) => {
    return (req, res, next) => {
        const data = req[property];
        const { error } = scahema.validate(data, { abortEarly: false });
        if(error) {
            next(boom.badRequest(error));
        }
        next();
    }
}

export { validateRequest };

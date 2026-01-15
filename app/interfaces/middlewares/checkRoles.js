import boom from "@hapi/boom";

const checkRoles = (...roles) => {
    return (req, res, next) => {
        const { user } = req;
        if(roles.includes(user.role)) {
            next();
        } else {
            next(boom.forbidden('No cuenta con permsisos para acceder a este recurso'));
        }
    };
};

export {
    checkRoles
};
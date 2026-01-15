import Joi from "joi";

const getByDepartamentSchema = Joi.object({
    departamentId: Joi.number().required().min(1)
}).messages({
    'number.base': 'El campo {#label} debe ser un número.',
    'any.required': '{ #label } es obligatorio',
    'number.min': '{ #label } debe ser mayor o igual a 1',
});

export {
    getByDepartamentSchema
}
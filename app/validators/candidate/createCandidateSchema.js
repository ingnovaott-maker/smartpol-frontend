import Joi from 'joi';

const createCandidateSchema =  Joi.object({
    identificationNumber: Joi.string().min(4).required(),
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().optional().allow(null, ''),
    cellPhone: Joi.string().optional().allow(null, ''),
    address: Joi.string().optional().allow(null, ''),
    politicParty: Joi.string().required(), 
    type: Joi.string().required(),
    
}).messages({
    'number.base': 'El campo {#label} debe ser un número.',
    'any.required': '{ #label } es obligatorio',
    'string.empty': '{ #label } no puede estar vacio',
    'string.base': '{ #label } debe ser una cadena de texto',   
    'string.email': 'El campo {#label} debe ser una dirección de correo electrónico válida',
    'date.format': 'El campo {#label} debe ser una fecha en formato ISO (YYYY-MM-DD).',
});

export default createCandidateSchema;
import Joi from 'joi';

const createPeopleSchema =  Joi.object({
    identificationNumber: Joi.string().min(4).required(),
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    cellPhone: Joi.string().optional().allow(null, ''),
    phone: Joi.string().optional().allow(null, ''),
    departamentId: Joi.number().min(1).required(),
    municipalityId: Joi.number().min(1).required(),
    neighborhood: Joi.string().optional().allow(null, ''),
    sidewalk: Joi.string().optional().allow(null, ''),
    address: Joi.string().optional().allow(null, ''),
    birthdate: Joi.string().optional().allow(null),
    email: Joi.string().email().optional().allow(null, ''),
    leaderId: Joi.number().min(1).optional(),
    candidateId: Joi.number().min(1).optional(),
    voteplaceId: Joi.number().min(1).optional().allow(null),
    table: Joi.number().optional().allow(null),
    gender: Joi.string().required(),
    role: Joi.string().required(),
    bloodType: Joi.string().optional().allow(null, ''),
    occupation: Joi.string().optional().allow(null, ''),
    profession: Joi.string().optional().allow(null, ''),
    population: Joi.string().optional().allow(null, ''),
    academicProfile: Joi.string().optional().allow(null, ''),
    description: Joi.string().optional().allow(null, ''),
    observations: Joi.string().optional().allow(null, ''),
    politicalState: Joi.string().optional().allow(null, ''),
    isVoted: Joi.optional(),
    votedDate: Joi.optional(),
}).messages({
    'number.base': 'El campo {#label} debe ser un número.',
    'number.min': 'El campo {#label} debe ser un número mayor que cero',
    'any.required': '{ #label } es obligatorio',
    'string.empty': '{ #label } no puede estar vacio',
    'string.base': '{ #label } debe ser una cadena de texto',   
    'string.email': 'El campo {#label} debe ser una dirección de correo electrónico válida'
});

export default createPeopleSchema;
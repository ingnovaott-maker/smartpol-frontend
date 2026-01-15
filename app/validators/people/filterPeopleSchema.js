import Joi from "joi";

const filterPeopleSchema = Joi.object({
    gender: Joi.string().required().allow(null, ''),
    politicalState: Joi.string().required().allow(null, ''),
    leaderId: Joi.number().required().allow(null, ''),
    candidateId: Joi.number().required().allow(null, ''),
    page: Joi.number().optional(),
    pageSize: Joi.number().optional()
});

export {
    filterPeopleSchema
}
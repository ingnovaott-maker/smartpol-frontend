import boom  from '@hapi/boom';
import { FindCandidateByIdetificationUseCase } from '../../useCases/candidate/findByIdentificationUseCase.js';

const useCase = new FindCandidateByIdetificationUseCase();

const verifyCandidate = async (req, res, next) => {
    const identificationNumber = req.body?.identificationNumber ?? req.body?.candidate?.identificationNumber;
    const { campaignId } = req.user;
    const candidate = await useCase.execute( identificationNumber, campaignId );
    
    if(candidate) {
        next(boom.badRequest(`El Candidato ${candidate.name} ${candidate.lastName} ya existe`));
    }

    next();
};

export { verifyCandidate }
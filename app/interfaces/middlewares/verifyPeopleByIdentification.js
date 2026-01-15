import boom  from '@hapi/boom';
import { FindPeopleByIdetificationUseCase } from '../../useCases/people/findByIdentificationUseCase.js';

const useCase = new FindPeopleByIdetificationUseCase();

const ERROR_MESSAGES = {
    REGISTERED_WITHOUT_LEADER: "El usuario {user} ya fue registrado sin lider y sin candidato",
    REGISTERED_WITH_LEADER_AND_CANDIDATE: "El usuario {user}  ya fue registrado. Lider: {leaderName}, Candidato: {candidate}",
    REGISTERED_WITH_LEADER: "El usuario {user}  ya fue registrado. Lider: {leaderName}, sin candidato",
    REGISTERED_WITH_CANDIDATE: "El usuario {user}  ya fue registrado sin lider. Candidato: {candidate}",
};

const verifyPeople = async (req, res, next) => {
    const { identification } = req.params;
    const { campaignId } = req.user;
    const people = await useCase.execute(identification, campaignId);
    
    if(people?.id) {
        const { name, lastName, identificationNumber, leader, candidate } = people;
        const user = `${name} ${lastName}: ${identificationNumber}`;
        const leaderNme = `${leader?.name}`;
        const candidateName = `${candidate?.name} ${candidate?.lastName}`;

        if(!people?.leaderId && !people?.candidateId ) {
            next(boom.badRequest(ERROR_MESSAGES.REGISTERED_WITHOUT_LEADER
                .replace('{user}', user)));
        }else if(people?.leaderId && people?.candidateId){
            next(boom.badRequest(ERROR_MESSAGES.REGISTERED_WITH_LEADER_AND_CANDIDATE
                .replace('{leaderName}', leaderNme)
                .replace('{user}', user)
                .replace('{candidate}', candidateName)
            ));
        }else if(people?.leaderId && !people?.candidateId) {
            next(boom.badRequest(ERROR_MESSAGES.REGISTERED_WITH_LEADER
                .replace('{leaderName}', leaderNme)
                .replace('{user}', user)
            ));
        }
        else{
            next(boom.badRequest(ERROR_MESSAGES.REGISTERED_WITH_CANDIDATE
                .replace('{candidate}', candidateName)
                .replace('{user}', user)
            ));
        }
    } else {
        next(boom.notFound('Usuario no está registrado'));
    }
};

export { verifyPeople }
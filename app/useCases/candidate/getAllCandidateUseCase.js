import { CandidateRepository } from '../../repositories/candidateRepository.js';
import { SummaryCandidateDTO } from '../../entities/dto/candidate/summaryCandidateDTO.js'

export class GetAllCandidateUseCase {

    constructor() {
        this.candidateRepository = new CandidateRepository();
    }
    async execute(param) {
        const candidates =  await this.candidateRepository.getAll(param);
        return candidates.map(candidate => SummaryCandidateDTO.create(candidate))
    }
}
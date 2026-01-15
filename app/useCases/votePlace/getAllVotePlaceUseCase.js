import { VotePlaceRepository } from '../../repositories/votePlaceRepository.js';
import { VotePlaceSummaryDTO } from '../../entities/dto/votePlace/votePlaceSummaryDTO.js';

export class GetAllVotePlaceUseCase {

    constructor() {
        this.votePlaceRepository = new VotePlaceRepository();
    }
    async execute(campaignId) {
        const results = await this.votePlaceRepository.getAll(campaignId);
        return results.map(item => VotePlaceSummaryDTO.create(item));
    }
}
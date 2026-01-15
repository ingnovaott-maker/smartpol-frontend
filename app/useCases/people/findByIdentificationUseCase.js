import { SummaryPeopleDTO } from '../../entities/dto/people/summaryPeopleDTO.js';
import { PeopleRepository } from '../../repositories/peopleRepository.js';
export class FindPeopleByIdetificationUseCase {

    constructor() {
        this.peopleRepository = new PeopleRepository();
    }
    async execute(identification, campaignId) {
        const people = await this.peopleRepository.findByIdentification(identification, campaignId);
        return SummaryPeopleDTO.create(people);
    }
}
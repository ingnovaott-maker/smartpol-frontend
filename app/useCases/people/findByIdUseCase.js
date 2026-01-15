import { SummaryPeopleDTO } from '../../entities/dto/people/summaryPeopleDTO.js';
import { PeopleRepository } from '../../repositories/peopleRepository.js';
export class FindPeopleByIdUseCase {

    constructor() {
        this.peopleRepository = new PeopleRepository();
    }
    async execute(param) {
        const result = await this.peopleRepository.findById(param);
        return SummaryPeopleDTO.create(result);
    }
}
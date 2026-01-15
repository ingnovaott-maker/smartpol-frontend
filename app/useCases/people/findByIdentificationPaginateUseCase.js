import { SummaryPeopleDTO } from '../../entities/dto/people/summaryPeopleDTO.js';
import { PeopleRepository } from '../../repositories/peopleRepository.js';
export class FindPeopleByIdetificationPaginateUseCase {

    constructor() {
        this.peopleRepository = new PeopleRepository();
    }
    async execute(identification, campaignId, page, pageSize) {
        const { count, rows } = await this.peopleRepository.findByIdentificationPaginate(identification, campaignId, page, pageSize);
        const summaryPeople = rows.map(async (item) =>
        SummaryPeopleDTO.create(item)
      );
       return {
        result: await Promise.all(summaryPeople),
        total: count,
        currentPage: page,
        pageSize
      }; 
    }
}
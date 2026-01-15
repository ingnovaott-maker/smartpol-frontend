import { SummaryPeopleDTO } from "../../entities/dto/people/summaryPeopleDTO.js";
import { PeopleRepository } from "../../repositories/peopleRepository.js";
export class FindByCampaignUseCase {
  constructor() {
    this.peopleRepository = new PeopleRepository();
  }
  async execute(param, page, pageSize) {
    const {count, rows } = await this.peopleRepository.findByCampaign(param, page, pageSize);
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

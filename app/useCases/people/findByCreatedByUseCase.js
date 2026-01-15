import { SummaryPeopleDTO } from "../../entities/dto/people/summaryPeopleDTO.js";
import { PeopleRepository } from "../../repositories/peopleRepository.js";
export class FindByCreatedByUseCase {
  constructor() {
    this.peopleRepository = new PeopleRepository();
  }
  async execute(param, page, pageSize) {
    const { count, rows } = await this.peopleRepository.findByCreatedBy(param, page, pageSize);
    const summaryPeoplePromise = rows.map(async (item) =>
      SummaryPeopleDTO.create(item)
    );
     return {
      result: await Promise.all(summaryPeoplePromise),
      total: count,
      currentPage: page,
      pageSize
    }; 
  }
}

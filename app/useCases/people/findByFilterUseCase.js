import { SummaryPeopleDTO } from "../../entities/dto/people/summaryPeopleDTO.js";
import { SummaryExcelPeopleDTO } from "../../entities/dto/people/summaryExcelPeopleDTO.js";
import { PeopleRepository } from "../../repositories/peopleRepository.js";
export class FindByFilterUseCase {
  constructor() {
    this.peopleRepository = new PeopleRepository();
  }
  async execute(paramsFilter) {
    const { page, pageSize } = paramsFilter;
    delete paramsFilter.page;
    delete paramsFilter.pageSize;
    const { count, rows } = await this.peopleRepository.findByFilter(paramsFilter, page, pageSize);
    const peoplePromise = rows.map(async (item) =>
      SummaryPeopleDTO.create(item)
    );
    return {
      result: await Promise.all(peoplePromise),
      total: count,
      currentPage: page,
      pageSize
    };
  }

  async executeReposrt(paramsFilter) {
    delete paramsFilter.page;
    delete paramsFilter.pageSize;
    const result = await this.peopleRepository.findByFilterExportExcel(paramsFilter);
    return result.map((item) => SummaryExcelPeopleDTO.create(item));
  }
}

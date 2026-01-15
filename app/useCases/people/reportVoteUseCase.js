import boom from "@hapi/boom";
import { PeopleRepository } from "../../repositories/peopleRepository.js";

export class ReportVoteUseCase {
  constructor() {
    this.peopleRepository = new PeopleRepository();
  }

  async execute(param, data) {
    const [updatedRows] = await this.peopleRepository.reportVote(param, data);

    if (updatedRows > 0) {
      return {};
    }
    throw boom.notFound("Error al reportar voto");
  }
}

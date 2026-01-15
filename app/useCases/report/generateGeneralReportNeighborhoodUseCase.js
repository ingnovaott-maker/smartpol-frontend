import { GeneralReportRepository } from "../../repositories/generalReportRepository.js";

export class GenerateGeneralReportNeighborhoodUseCase {
  constructor() {
    this.generalReportRepository = new GeneralReportRepository();
  }

  async execute(campaignId) {
    return this.generalReportRepository.voteCountByNeighborhood(campaignId);
  }
}

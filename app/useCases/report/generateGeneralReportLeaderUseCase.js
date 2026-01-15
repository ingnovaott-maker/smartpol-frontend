import { GeneralReportRepository } from "../../repositories/generalReportRepository.js";

export class GenerateGeneralReportLeaderUseCase {
  constructor() {
    this.generalReportRepository = new GeneralReportRepository();
  }

  async execute(campaignId) {
    return this.generalReportRepository.voteCountByLeader(campaignId);
  }
}

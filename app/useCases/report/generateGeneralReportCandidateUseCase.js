import { GeneralReportRepository } from "../../repositories/generalReportRepository.js";

export class GenerateGeneralReportCandidateUseCase {
  constructor() {
    this.generalReportRepository = new GeneralReportRepository();
  }

  async execute(campaignId) {
    return this.generalReportRepository.voteCountByCandidate(campaignId);
  }
}

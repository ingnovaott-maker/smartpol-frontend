import { GeneralReportRepository } from "../../repositories/generalReportRepository.js";

export class GenerateGeneralReportVotePlaceUseCase {
    
  constructor() {
    this.generalReportRepository = new GeneralReportRepository();
  }

  async execute(campaignId) {
    return this.generalReportRepository.voteCountByVotePlace(campaignId);
  }
}

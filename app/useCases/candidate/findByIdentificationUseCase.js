import { CandidateRepository } from "../../repositories/candidateRepository.js";

export class FindCandidateByIdetificationUseCase {
  constructor() {
    this.candidateRepository = new CandidateRepository();
  }
  async execute(identification, campaignId) {
    return await this.candidateRepository.findByIdentification(
      identification,
      campaignId
    );
  }
}

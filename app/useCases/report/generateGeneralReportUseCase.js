import { GeneralReportRepository } from '../../repositories/generalReportRepository.js';
export class GenerateGeneralReportUseCase {

    constructor() {
        this.generalReportRepository = new GeneralReportRepository();
    }
    async execute(campaignId) {

        const [totalVoters, totalCandidates, totalRegisteredVotes, totalPendingVotes, totalLeaders ] = await Promise.all([
            this.generalReportRepository.countVoters(campaignId),
            this.generalReportRepository.countCandidates(campaignId),
            this.generalReportRepository.countRegisteredVotes(campaignId),
            this.generalReportRepository.countPendingVotes(campaignId),
            this.generalReportRepository.countLeaders(campaignId)
        ]);

        return {
            totalVoters,
            totalCandidates,
            totalRegisteredVotes,
            totalPendingVotes,
            totalLeaders
        }
    }
}
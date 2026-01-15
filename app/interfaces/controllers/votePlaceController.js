import { GetAllVotePlaceUseCase } from "../../useCases/votePlace/getAllVotePlaceUseCase.js";
import { Response } from '../middlewares/response.js'

export class VotePlaceController {
    constructor() {
        this.getAllVotePlaceUseCase = new GetAllVotePlaceUseCase();
    }

    async getAll(req, res) {
        const { campaignId } = req.user; 
        const result = await this.getAllVotePlaceUseCase.execute(campaignId);
        res.status(200).json(Response.ok(result));
    }
}
import { CreateCampaignUseCase } from '../../useCases/campaign/createCampaignUseCase.js';
import { Response } from "../middlewares/response.js";

export class CampaIgnController {
    constructor() {
        this.createCampaignUseCase = new CreateCampaignUseCase();
    }

    async create(req, res, next) {
        try {
          const result = await this.createCampaignUseCase.execute(req.body);
          res.status(201).json(Response.ok(result, 201));
        } catch (error) {
          next(error);
        }
      }
}
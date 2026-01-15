import { GetAllCandidateUseCase } from "../../useCases/candidate/getAllCandidateUseCase.js";
import { CreateCandidateAndUserUseCase } from "../../useCases/candidate/createCandidateAndUserUseCase.js";
import { Response } from '../middlewares/response.js'

export class CandidateController {
    constructor() {
        this.getAllCandidateUseCase = new GetAllCandidateUseCase();
        this.createCandidateAndUserUseCase = new CreateCandidateAndUserUseCase();
    }

    async getAll(req, res, next) {
        const result = await this.getAllCandidateUseCase.execute(req.user.campaignId);
        res.status(200).json(Response.ok(result));
    }

    async createWithUser(req, res, next) {
        try {
          const data = {
            ...req.body,
            campaignId: req.user.campaignId
          }
          const candidate = await this.createCandidateAndUserUseCase.execute(data);
          res.status(201).json(Response.ok(candidate, 201));
        } catch (error) {
          next(error);
        }
      }
}
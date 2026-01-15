import { GetByDepartamentUseCase } from "../../useCases/municipality/getByDepartamentUseCase.js";
import { Response } from '../middlewares/response.js'
export class MunicipalityController {
    constructor() {
        this.getByDepartamentUseCase = new GetByDepartamentUseCase();
    }

    async getByDepartament(req, res, next) {
        try {
            const { departamentId } = req.params
            const municipalities = await this.getByDepartamentUseCase.execute(departamentId);
            res.status(200).json(Response.ok(municipalities));
        } catch (error) {
            next(error);
        }
    }
}
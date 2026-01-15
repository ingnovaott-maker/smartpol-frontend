import { GetAllDepartamentUseCase } from "../../useCases/departament/getAllDepartamentUseCase.js";
import { Response } from '../middlewares/response.js'

export class DepartamentController {
    constructor() {
        this.getAllDepartamentUseCase = new GetAllDepartamentUseCase();
    }

    async getAll(req, res) {
        const departaments = await this.getAllDepartamentUseCase.execute();
        res.status(200).json(Response.ok(departaments));
    }
}
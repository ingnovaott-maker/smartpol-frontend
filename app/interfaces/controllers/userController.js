import { FindUserByRoleUseCase } from "../../useCases/user/findUserByRoleUseCase.js";
import { ChangePasswordUseCase } from "../../useCases/user/changePasswordUseCase.js";
import { Response } from '../middlewares/response.js'
export class UserController {
    constructor() {
        this.findUserByRoleUseCase = new FindUserByRoleUseCase();
        this.changePasswordUseCase = new ChangePasswordUseCase();
    }

    async getByRole(req, res, next) {
        try {
            const params = {
                role: req.params.role,
                campaignId: req.user.campaignId
              }
            const users = await this.findUserByRoleUseCase.execute(params);
            res.status(200).json(Response.ok(users));
        } catch (error) {
            next(error);
        }
    }

    async changePassword(req, res, next) {
        const { id, password } = req.body;
        try {
            const result = await this.changePasswordUseCase.execute(id, password);
            res.status(200).json(Response.ok(result));
        } catch (error) {
            next(error);
        }
    }
}
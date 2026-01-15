import { UserRepository } from '../../repositories/userRepository.js';
import { UserSummaryDTO } from '../../entities/dto/users/userSummaryDTO.js';

export class FindUserByRoleUseCase {

    constructor() {
        this.userRepository = new UserRepository();
    }
    async execute(params) {
        const users = await this.userRepository.findByRole(params);
        return users.map(user => UserSummaryDTO.create(user));
    }
}
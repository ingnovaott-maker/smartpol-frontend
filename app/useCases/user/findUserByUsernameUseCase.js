import { UserRepository } from '../../repositories/userRepository.js';

export class FindUserByUsernameUseCase {

    constructor() {
        this.userRepository = new UserRepository();
    }
    async execute(param) {
        return await this.userRepository.findByUsername(param);
    }
}
import { UserRepository } from '../../repositories/userRepository.js';

export class CreateUserUseCase {

    constructor() {
        this.userRepository = new UserRepository();
    }
    async execute(input) {
        return await this.userRepository.create(input);
    }
}
import { UserRepository } from '../../repositories/userRepository.js';
import { hashPassword } from '../../utils/encrypt/passwordEncriptUtils.js';
export class ChangePasswordUseCase {
    #userRepository;
    constructor() {
        this.#userRepository = new UserRepository();
    }

    async execute(id, passwordText) {
        const password = await hashPassword(passwordText);
        return this.#userRepository.changePassword(id, password);
    }
}
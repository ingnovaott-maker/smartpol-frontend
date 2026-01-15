import { DepartamentRepository } from '../../repositories/departamentRepository.js';

export class GetAllDepartamentUseCase {

    constructor() {
        this.departamentRepository = new DepartamentRepository();
    }
    async execute() {
        return await this.departamentRepository.getAll();
    }
}
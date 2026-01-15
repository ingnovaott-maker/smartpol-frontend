import { MunicipalityRepository } from '../../repositories/municipalityRepository.js';

export class GetByDepartamentUseCase {

    constructor() {
        this.municipalityRepository = new MunicipalityRepository();
    }
    async execute(departamentId) {
        return await this.municipalityRepository.getByDepartament(departamentId);
    }
}
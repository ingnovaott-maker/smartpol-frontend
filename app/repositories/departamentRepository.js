import sequelize  from '../database/sequelize.js'

export class DepartamentRepository {

    async getAll() {
        const { Departament } = sequelize.models
        return await Departament.getAll();
    }
}
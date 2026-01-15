import sequelize from "../database/sequelize.js";

export class MunicipalityRepository {
  async getByDepartament(id) {
    const { Municipality } = sequelize.models;
    return await Municipality.findAll({
      where: {
        departamentId: id,
      },
      order: [["name", "ASC"]],
      attributes: ["id", "name"]
    });
  }
}

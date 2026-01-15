import boom from "@hapi/boom";
import { PeopleRepository } from "../../repositories/peopleRepository.js";
export class UpdatePeopleUseCase {
  constructor() {
    this.peopleRepository = new PeopleRepository();
  }
  async execute(param, data) {
    const [updatedRows] = await this.peopleRepository.update(param, data);

    if (updatedRows > 0) {
      return {};
    }
    throw boom.notFound("Error al actualizar, usuario no existe");
  }
}

import { PeopleRepository } from '../../repositories/peopleRepository.js';
import { PeopleEntity } from '../../entities/peopleEntity.js';
import { UserEntity } from '../../entities/userEntity.js';
/**
 * The `CreatePeopleAndUserUseCase` class is responsible for creating a new person and user in the system.
 * It uses the `PeopleRepository` class to interact with the database and the `PeopleEntity` and `UserEntity` classes to create the necessary entities.
 */
export class CreatePeopleAndUserUseCase {
  /**
   * Initializes the `PeopleRepository` instance.
   */
  constructor() {
    this.peopleRepository = new PeopleRepository();
  }

  /**
   * Creates a new person and user in the system based on the provided input.
   * @param {Object} input - The input data for creating a person and user.
   * @returns {Promise<string>} - The created person and user in the system.
   */
  async execute(input) {
    const peopleEntity = await PeopleEntity.create(input);
    const { name, lastName, identificationNumber, role, campaignId } = peopleEntity;
    const userEntity = await UserEntity.create(`${name} ${lastName}`, identificationNumber, role, campaignId);

    return await this.peopleRepository.createWithUser(peopleEntity, userEntity);
  }
}
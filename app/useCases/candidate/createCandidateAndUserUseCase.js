import { CandidateRepository } from "../../repositories/candidateRepository.js";
import { CandidateEntity } from "../../entities/candidateEntity.js";
import { UserEntity } from "../../entities/userEntity.js";
import { ROLES_OBJECT } from "../../utils/enums/rolesEnum.js";
export class CreateCandidateAndUserUseCase {
  constructor() {
    this.candidateRepository = new CandidateRepository();
  }
  async execute(input) {
    const candidateEntity = await CandidateEntity.create(input);

    const { name, lastName, identificationNumber, campaignId } =
      candidateEntity;
    const userEntity = await UserEntity.create(
      `${name} ${lastName}`,
      identificationNumber,
      ROLES_OBJECT.CANDIDATO,
      campaignId
    );
    return await this.candidateRepository.createWithUser(
      candidateEntity,
      userEntity
    );
  }
}

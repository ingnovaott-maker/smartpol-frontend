import { CampaignRepository } from "../../repositories/campaignRepository.js";
import { CampaignEntity } from "../../entities/campaignEntity.js";
import { CandidateEntity } from "../../entities/candidateEntity.js";
import { UserEntity } from "../../entities/userEntity.js";
import { ROLES_OBJECT } from "../../utils/enums/rolesEnum.js";

export class CreateCampaignUseCase {
  constructor() {
    this.campaignRepository = new CampaignRepository();
  }

  async execute(input) {
    const campaignEntity = await CampaignEntity.create(input);

    const { name, lastName, identificationNumber, campaignId } =
      input.candidate;
    const userEntity = await UserEntity.create(
      `${name} ${lastName}`,
      identificationNumber,
      ROLES_OBJECT.CANDIDATO_PRINCIPAL,
      campaignId
    );

    const candidateEntity = await CandidateEntity.create(input.candidate);

    return await this.campaignRepository.create(
      campaignEntity,
      userEntity,
      candidateEntity
    );
  }
}

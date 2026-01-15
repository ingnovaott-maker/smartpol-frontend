import sequelize from "../database/sequelize.js";

export class CandidateRepository {
  async getAll(param) {
    const { Candidate } = sequelize.models;
    return await Candidate.getAll(param);
  }

  async createWithUser(candidateEntity, userEntity) {
    const { Candidate, User } = sequelize.models;
    return await sequelize.transaction(async (t) => {
      const createdUser = await User.create(userEntity, { transaction: t });
      candidateEntity.userId = createdUser.dataValues.id;
      return await Candidate.create(candidateEntity, { transaction: t });
    });
  }

  async findByIdentification(identification, campaignId) {
    const { Candidate } = sequelize.models;
    return await Candidate.findOne({
      where: { identification_number: identification, campaign_id: campaignId }
    });
  }
}

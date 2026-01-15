import sequelize from "../database/sequelize.js";

export class CampaignRepository {
  async create(campaignEntity, userEntity, candidateEntity) {
    const { Campaign, User, Candidate } = sequelize.models;
    return await sequelize.transaction(async (t) => {
      const createdCampaign = await Campaign.create(campaignEntity, {
        transaction: t,
      });

      userEntity.campaignId = createdCampaign.dataValues.id;
      const createdUser = await User.create(userEntity, { transaction: t });

      candidateEntity.userId = createdUser.dataValues.id;
      candidateEntity.campaignId = createdCampaign.dataValues.id;
      candidateEntity.main = true;
      await Candidate.create(candidateEntity, {
        transaction: t,
      });

      return {
        campaign: {
          name: createdCampaign.name,
          startDate: createdCampaign.startDate,
          endDate: createdCampaign.endDate,
        },
        user: {
          username: createdUser.username,
          password: createdUser.username,
        },
      };
    });
  }
}

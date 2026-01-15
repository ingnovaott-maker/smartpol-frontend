import sequelize from "../database/sequelize.js";
export class UserRepository {
  async create(entity) {
    const { User } = sequelize.models;
    return await User.create(entity);
  }

  async findByUsername(username) {
    const { User } = sequelize.models;
    return await User.findOne({
      where: { username, active: true },
      include: ['campaign']
    });
  }

  async findByRole(params, active = true) {
    const { role, campaignId } = params;
    const { User } = sequelize.models;
    return await User.findAll({
      where: {
        role: role.toUpperCase(),
        campaign_id: campaignId,
        active,
      },
    });
  }

  async changePassword(id, password) {
    const { User } = sequelize.models;
    return await User.update({ password }, {
      where: {
        id,
      },
    });
  }
}

import sequelize from "../database/sequelize.js";
import { ROLES_ARRAY, ROLES_OBJECT } from "../utils/enums/rolesEnum.js";
import moment from "moment-timezone";

export class PeopleRepository {
  async create(entity) {
    const { People } = sequelize.models;
    return await People.create(entity);
  }

  async createWithUser(peopleEntity, userEntity) {
    const { People, User } = sequelize.models;
    return await sequelize.transaction(async (t) => {
      const roleUser = peopleEntity.role.toUpperCase();
      if (ROLES_ARRAY.includes(roleUser)) {
        const createdUser = await User.create(userEntity, { transaction: t });
        peopleEntity.userId = createdUser.dataValues.id;
        if (roleUser === ROLES_OBJECT.LIDER) {
          peopleEntity.leaderId = createdUser.dataValues.id;
        }
      }

      return await People.create(peopleEntity, { transaction: t });
    });
  }

  async update(id, people) {
    const { People } = sequelize.models;
    return await People.update(people, {
      where: {
        id,
      },
    });
  }

  async findByIdentification(identification, campaignId) {
    const { People } = sequelize.models;
    return await People.findOne({
      where: { identification_number: identification, campaign_id: campaignId },
      include: ["leader", "candidate"],
    });
  }

  async findById(id) {
    const { People } = sequelize.models;
    return await People.findByPk(id, {
      include: [
        "departament",
        "municipality",
        "user",
        "candidate",
        "leader",
        "voteplace",
      ],
    });
  }

  async findByCampaign(campaignId, page = 1, pageSize = 100) {
    const { People } = sequelize.models;
    const offset = (page - 1) * pageSize;
    const limit = pageSize;
    return await People.findAndCountAll({
      where: {
        campaign_id: campaignId,
        userId: null
      },
      include: [
        "departament",
        "municipality",
        "user",
        "candidate",
        "voteplace",
      ],
      limit, 
      offset
    });
  }

  //Filtros
  async findByFilter(filter, page, pageSize) {
    const { People } = sequelize.models;
    const offset = (page - 1) * pageSize;
    const limit = pageSize;
    return await People.findAndCountAll({
      where: filter,
      include: [
        "departament",
        "municipality",
        "user",
        "candidate",
        "leader",
        "voteplace",
      ],
      limit,
      offset
    });
  }

  async findByFilterExportExcel(filter) {
    const { People } = sequelize.models;
    return await People.findAll({
      where: filter,
      include: [
        "departament",
        "municipality",
        "user",
        "candidate",
        "leader",
        "voteplace",
      ],
    });
  }

  async findByCreatedBy(userId, page = 1, pageSize = 100) {
    const { People } = sequelize.models;
    const offset = (page - 1) * pageSize;
    const limit = pageSize;
    return await People.findAndCountAll({
      where: {
        created_by: userId,
        userId: null
      },
      include: [
        "departament",
        "municipality",
        "user",
        "candidate",
        "voteplace",
      ],
      limit,
      offset
    });
  }

  async findByIdentificationPaginate(identification, campaignId, page = 1, pageSize = 1) {
    const { People } = sequelize.models;
    const offset = (page - 1) * pageSize;
    const limit = pageSize;
    return await People.findAndCountAll({
      where: { 
        identification_number: identification, 
        campaign_id: campaignId,
        user_id: null
      },
      include: ["leader", "candidate"],
      limit,
      offset
    });
  }

  async reportVote(id, data) {
    const { People } = sequelize.models;
    const currentDate = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss')
    return await People.update(
      {
        isVoted: data.isVoted,
        votedDate: currentDate
      },
      {
        where: {
          id
        },
      }
    );
  }
}

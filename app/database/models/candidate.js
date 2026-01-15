import { Model, DataTypes } from "sequelize";
import { USER_TABLE } from "./user.js";
import { CAMPAIGN_TABLE } from "./campaign.js";

const CANDIDATE_TABLE = "candidates";

const CANDIDATE_SCHEMA = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  identificationNumber: {
    allowNull: false,
    field: "identification_number",
    type: DataTypes.STRING,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    field: "last_name",
    type: DataTypes.STRING,
  },
  email: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  cellPhone: {
    allowNull: true,
    field: "cell_phone",
    type: DataTypes.STRING,
  },
  address: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  politicParty: {
    allowNull: false,
    field: "politic_party",
    type: DataTypes.STRING,
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  main: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  userId: {
    allowNull: false,
    type: DataTypes.BIGINT,
    field: "user_id",
    references: {
      model: USER_TABLE,
      key: "id",
    },
  },
  campaignId: {
    allowNull: true,
    type: DataTypes.BIGINT,
    field: "campaign_id",
    references: {
      model: CAMPAIGN_TABLE,
      key: "id",
    },
  },
  createdAt: {
    allowNull: false,
    field: "created_at",
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    allowNull: false,
    field: "updated_at",
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
};

class Candidate extends Model {
  static associate(models) {
    this.belongsTo(models?.User, { as: 'user'});
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CANDIDATE_TABLE,
      modelName: "Candidate",
      timestamps: false,
    };
  }

  static async getAll(campaignId) {
    return this.findAll({
      where: {
        campaign_id: campaignId,
        main: false
      }
    });
  }
}

export { CANDIDATE_TABLE, CANDIDATE_SCHEMA, Candidate };

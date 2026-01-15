import { Model, DataTypes } from "sequelize";

const CAMPAIGN_TABLE = "campaigns";

const CAMPAIGN_SCHEMA = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  startDate: {
    allowNull: false,
    field: "start_date",
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  endDate: {
    allowNull: false,
    field: "end_date",
    type: DataTypes.DATE
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
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

class Campaign extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CAMPAIGN_TABLE,
      modelName: "Campaign",
      timestamps: false,
    };
  }

}

export { CAMPAIGN_TABLE, CAMPAIGN_SCHEMA, Campaign };

import { Model, DataTypes } from 'sequelize';
import { CAMPAIGN_TABLE } from "./campaign.js";

const USER_TABLE = 'users';

const USER_SCHEMA = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    role: {
        allowNull: false,
        type: DataTypes.STRING
    },
    active: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
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
      allowNull: true,
      field: 'created_at',
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: true,
      field: 'updated_at',
      type: DataTypes.DATE
    }
  }

  class User extends Model {

    static associate(models) {
      this.hasMany(models?.People, {
        foreignKey: 'leader_id',
        as: 'leader'
      });

      this.hasMany(models?.People, {
        foreignKey: 'user_id',
        as: 'people'
      })
      this.belongsTo(models?.Campaign, { as: 'campaign'});
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }

  }

  export {
    USER_TABLE, USER_SCHEMA, User
  }
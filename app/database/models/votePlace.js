import { Model, DataTypes } from "sequelize";
import { DEPARTAMENT_TABLE } from "./departament.js";
import { MUNICIPALITY_TABLE } from "./municipality.js";

const VOTE_PLACE_TABLE = "vote_places";

const VOTE_PLACE_SCHEMA = {
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
  departamentId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "departament_id",
    references: {
      model: DEPARTAMENT_TABLE,
      key: "id",
    },
    onUpdate: "RESTRICT",
    onDelete: "RESTRICT",
  },
  municipalityId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "municipality_id",
    references: {
      model: MUNICIPALITY_TABLE,
      key: "id",
    },
    onUpdate: "RESTRICT",
    onDelete: "RESTRICT",
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  table: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: true,
    field: "created_at",
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: true,
    field: "updated_at",
    type: DataTypes.DATE,
  },
};

class VotePlace extends Model {
  static associate(models) {
    this.belongsTo(models?.Departament, { as: "departament" });
    this.belongsTo(models?.Municipality, { as: "municipality" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: VOTE_PLACE_TABLE,
      modelName: "VotePlace",
      timestamps: false,
    };
  }
}

export { VOTE_PLACE_TABLE, VOTE_PLACE_SCHEMA, VotePlace };

import { Model, DataTypes } from "sequelize";

const DEPARTAMENT_TABLE = "departaments";

const DEPARTAMENT_SCHEMA = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  code: {
    allowNull: false,
    type: DataTypes.INTEGER,
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
  },
};

class Departament extends Model {
  static associate(models) {
    this.hasMany(models?.Municipality, {
      as: "municipalities",
      foreignKey: "departament_id",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DEPARTAMENT_TABLE,
      modelName: "Departament",
      timestamps: false,
    };
  }

  static async getAll() {
    return this.findAll({
      order: [["name", "ASC"]],
      attributes: ["id", "name"],
    });
  }
}

export { DEPARTAMENT_TABLE, DEPARTAMENT_SCHEMA, Departament };

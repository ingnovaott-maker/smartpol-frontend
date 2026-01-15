import { Model, DataTypes } from 'sequelize';
import { DEPARTAMENT_TABLE } from './departament.js'

const MUNICIPALITY_TABLE = 'municipalities';

const MUNICIPALITY_SCHEMA = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    code: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    departamentId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'departament_id',
        references: {
          model: DEPARTAMENT_TABLE,
          key: 'id'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    },
    createdAt: {
      allowNull: true,
      field: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      field: 'updated_at',
      type: DataTypes.DATE
    }
  }

  class Municipality extends Model {
    static associate(models) {
      this.belongsTo(models?.Departament, { as: 'departament'});
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: MUNICIPALITY_TABLE,
            modelName: 'Municipality',
            timestamps: false
        }
    }
  }

  export {
    MUNICIPALITY_TABLE, MUNICIPALITY_SCHEMA, Municipality
  }
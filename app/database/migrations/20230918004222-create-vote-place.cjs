'use strict';

/** @type {import('sequelize-cli').Migration} */
const DEPARTAMENT_TABLE = 'departaments';
const MUNICIPALITY_TABLE = 'municipalities';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('vote_places', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      departamentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
        field: "municipality_id",
        references: {
          model: MUNICIPALITY_TABLE,
          key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      table: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: true,
        field: "created_at",
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        field: "updated_at",
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('vote_places');
  }
};

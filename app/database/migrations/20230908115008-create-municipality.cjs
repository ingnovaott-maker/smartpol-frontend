'use strict';

/** @type {import('sequelize-cli').Migration} */
const DEPARTAMENT_TABLE = 'departaments';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('municipalities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      code: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      departamentId: {
          allowNull: false,
          type: Sequelize.INTEGER,
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
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        field: 'updated_at',
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('municipalities');
  }
};

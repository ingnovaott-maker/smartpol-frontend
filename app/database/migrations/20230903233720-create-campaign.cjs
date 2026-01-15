'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('campaigns', {
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
      startDate: {
        allowNull: false,
        field: "start_date",
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      endDate: {
        allowNull: false,
        field: "end_date",
        type: Sequelize.DATE
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        field: "created_at",
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        field: "updated_at",
        type: Sequelize.DATE
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('campaigns');
  }
};

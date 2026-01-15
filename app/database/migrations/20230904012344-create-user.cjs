'use strict';

/** @type {import('sequelize-cli').Migration} */
const CAMPAIGN_TABLE = 'campaigns';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      username: {
          allowNull: false,
          type: Sequelize.STRING
      },
      password: {
          allowNull: false,
          type: Sequelize.STRING
      },
      role: {
          allowNull: false,
          type: Sequelize.STRING
      },
      active: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: true
      },
      campaignId: {
        allowNull: true,
        type: Sequelize.BIGINT,
        field: "campaign_id",
        references: {
          model: CAMPAIGN_TABLE,
          key: "id",
        },
      },
      createdAt: {
        allowNull: true,
        field: 'created_at',
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: true,
        field: 'updated_at',
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};

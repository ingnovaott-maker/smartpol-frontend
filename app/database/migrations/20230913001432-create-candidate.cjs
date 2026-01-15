"use strict";

/** @type {import('sequelize-cli').Migration} */
const USER_TABLE = "users";
const CAMPAIGN_TABLE = "campaigns";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("candidates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      identificationNumber: {
        allowNull: false,
        field: "identification_number",
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastName: {
        allowNull: false,
        field: "last_name",
        type: Sequelize.STRING,
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      cellPhone: {
        allowNull: true,
        field: "cell_phone",
        type: Sequelize.STRING,
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      politicParty: {
        allowNull: false,
        field: "politic_party",
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      main: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      userId: {
        allowNull: false,
        type: Sequelize.BIGINT,
        field: "user_id",
        references: {
          model: USER_TABLE,
          key: "id",
        },
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
        allowNull: false,
        field: "created_at",
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        field: "updated_at",
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("candidates");
  },
};

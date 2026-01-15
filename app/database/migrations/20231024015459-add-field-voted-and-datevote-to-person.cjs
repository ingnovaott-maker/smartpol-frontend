'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('people', 'is_voted', { 
      type: Sequelize.BOOLEAN,
      allowNull: true,
      after: 'created_by'
    });
    await queryInterface.addColumn('people', 'voted_date', { 
      type: Sequelize.DATE,
      allowNull: true,
      after: 'created_by'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('people', 'is_voted');
    await queryInterface.removeColumn('people', 'voted_date');
  }
};

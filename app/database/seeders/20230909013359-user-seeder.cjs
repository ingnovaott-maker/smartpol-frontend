'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');
module.exports = {
  async up (queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash('71385323', salt);
    await queryInterface.bulkInsert('users', [{
      name: 'Agustin Oyola',
      username: '71385323',
      password: hash, //71385323
      role: 'PROPIETARIO',
      campaign_id: null
    }], {});
    //carlos alberto salgado atencia
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

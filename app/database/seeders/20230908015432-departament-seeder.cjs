'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('departaments', [
      { name: 'Antioquia', code: '5' },
      { name: 'Boyacá', code: '15' },
      { name: 'Córdoba', code: '23' },
      { name: 'Chocó', code: '27' },
      { name: 'Nariño', code: '52' },
      { name: 'Santander', code: '68' },
      { name: 'Meta', code: '50' },
      { name: 'Atlántico', code: '8' },
      { name: 'Bolívar', code: '13' },
      { name: 'Caldas', code: '17' },
      { name: 'Caquetá', code: '18' },
      { name: 'Cauca', code: '19' },
      { name: 'Cesar', code: '20' },
      { name: 'Cundinamarca', code: '25' },
      { name: 'Huila', code: '41' },
      { name: 'La Guajira', code: '44' },
      { name: 'Magdalena', code: '47' },
      { name: 'Quindío', code: '63' },
      { name: 'Risaralda', code: '66' },
      { name: 'Sucre', code: '70' },
      { name: 'Tolima', code: '73' },
      { name: 'Arauca', code: '81' },
      { name: 'Casanare', code: '85' },
      { name: 'Putumayo', code: '86' },
      { name: 'Amazonas', code: '91' },
      { name: 'Guainía', code: '94' },
      { name: 'Vaupés', code: '97' },
      { name: 'Vichada', code: '99' },
      { name: 'Guaviare', code: '95' },
      {
        name: 'Archipiélago de San Andrés, Providencia y Santa Catalina',
        code: '88'
      },
      { name: 'Bogotá D.C.', code: '11' },
      { name: 'Norte de Santander', code: '54' },
      { name: 'Valle del Cauca', code: '76' },
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('departaments', null, {});
     
  }
};

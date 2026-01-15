"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "vote_places",
      [
        {
          name: "PUESTO CABECERA MUNICIPAL",
          departament_id: 20,
          municipality_id: 773,
          table: "1,2,3,4,5,6,7,8,9,10,11,12,13",
        },
        {
          name: "SANTA ROSA",
          departament_id: 20,
          municipality_id: 773,
          table: "1",
        },
        {
          name: "TIERRA SANTA",
          departament_id: 20,
          municipality_id: 773,
          table: "1",
        },
        {
          name: "VILLAVICENCIO (PALMA GIPATA)",
          departament_id: 20,
          municipality_id: 773,
          table: "1",
        },
        {
          name: "SAN FRANCISCO",
          departament_id: 20,
          municipality_id: 773,
          table: "1,2,3",
        },
        {
          name: "PALMITAL",
          departament_id: 20,
          municipality_id: 773,
          table: "1",
        },
        {
          name: "EL SITIO",
          departament_id: 20,
          municipality_id: 773,
          table: "1,2,3",
        },
        {
          name: "PATILLAL",
          departament_id: 20,
          municipality_id: 773,
          table: "1",
        },
        {
          name: "LAS TABLITAS",
          departament_id: 20,
          municipality_id: 773,
          table: "1,2",
        },
        {
          name: "GRILLO ALEGRE",
          departament_id: 20,
          municipality_id: 773,
          table: "1",
        },
        {
          name: "CORNETA",
          departament_id: 20,
          municipality_id: 773,
          table: "1,2",
        },
        {
          name: "CAYO DE PALMA",
          departament_id: 20,
          municipality_id: 773,
          table: "1,2",
        },
        {
          name: "CALLEJON",
          departament_id: 20,
          municipality_id: 773,
          table: "1",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("vote_places", null, {});
  },
};

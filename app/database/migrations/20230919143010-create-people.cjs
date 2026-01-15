'use strict';
/** @type {import('sequelize-cli').Migration} */
const USER_TABLE = 'users';
const CANDIDATE_TABLE = 'candidates';
const DEPARTAMENT_TABLE = 'departaments';
const MUNICIPALITY_TABLE = 'municipalities';
const CAMPAIGN_TABLE = 'campaigns';
const VOTE_PLACE_TABLE = 'vote_places';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('people', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      identificationNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'identification_number'
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'last_name'
      },
      cellPhone: {
        type: Sequelize.STRING,
        field: 'cell_phone'
      },
      phone: {
        type: Sequelize.STRING
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
      municipalityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'municipality_id',
        references: {
          model: MUNICIPALITY_TABLE,
          key: 'id'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
      },
      userId: {
        allowNull: true,
        type: Sequelize.BIGINT,
        field: 'user_id',
        references: {
          model: USER_TABLE,
          key: 'id'
        }
      },
      neighborhood: {
        type: Sequelize.STRING
      },
      sidewalk: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      birthdate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING
      },
      leaderId: {
        allowNull: true,
        type: Sequelize.BIGINT,
        field: 'leader_id',
        references: {
          model: USER_TABLE,
          key: 'id'
        }
      },
      candidateId: {
        allowNull: true,
        type: Sequelize.BIGINT,
        field: 'candidate_id',
        references: {
          model: CANDIDATE_TABLE,
          key: 'id'
        }
      },
      voteplaceId: {
        allowNull: true,
        type: Sequelize.BIGINT,
        field: 'vote_place_id',
        references: {
          model: VOTE_PLACE_TABLE,
          key: 'id'
        }
      },
      table: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      gender: {
        allowNull: false,
        type: Sequelize.CHAR(5)
      },
      bloodType: {
        type: Sequelize.CHAR(5),
        field: 'blood_type'
      },
      occupation: {
        type: Sequelize.STRING
      },
      profession: {
        allowNull: false,
        type: Sequelize.STRING
      },
      population: {
        type: Sequelize.STRING
      },
      academicProfile: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'academic_profile'
      },
      description: {
        type: Sequelize.TEXT
      },
      observations: {
        type: Sequelize.TEXT
      },
      politicalState: {
        type: Sequelize.STRING,
        field: 'political_state'
      },
      campaignId: {
        allowNull: true,
        type: Sequelize.BIGINT,
        field: 'campaign_id',
        references: {
          model: CAMPAIGN_TABLE,
          key: 'id'
        }
      },
      createdBy: {
        allowNull: false,
        field: 'created_by',
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('people');
  }
};
import {Model, DataTypes, Sequelize } from 'sequelize';
import { DEPARTAMENT_TABLE } from './departament.js';
import { MUNICIPALITY_TABLE } from './municipality.js';
import { USER_TABLE } from './user.js';
import { CANDIDATE_TABLE} from './candidate.js';
import { CAMPAIGN_TABLE } from './campaign.js';
import { VOTE_PLACE_TABLE } from './votePlace.js';

const PEOPLE_TABLE = 'people';

const PEOPLE_SCHEMA = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  identificationNumber: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'identification_number'
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  },
  cellPhone: {
    type: DataTypes.STRING,
    field: 'cell_phone'
  },
  phone: {
    type: DataTypes.STRING
  },
  departamentId: {
    allowNull: false,
    type: DataTypes.INTEGER,
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
    type: DataTypes.INTEGER,
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
    type: DataTypes.BIGINT,
    field: 'user_id',
    references: {
      model: USER_TABLE,
      key: 'id'
    }
  },
  neighborhood: {
    type: DataTypes.STRING
  },
  sidewalk: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  birthdate: {
    allowNull: true,
    type: DataTypes.DATE
  },
  email: {
    type: DataTypes.STRING
  },
  leaderId: {
    allowNull: true,
    type: DataTypes.BIGINT,
    field: 'leader_id',
    references: {
      model: USER_TABLE,
      key: 'id'
    }
  },
  candidateId: {
    allowNull: true,
    type: DataTypes.BIGINT,
    field: 'candidate_id',
    references: {
      model: CANDIDATE_TABLE,
      key: 'id'
    }
  },
  voteplaceId: {
    allowNull: true,
    type: DataTypes.BIGINT,
    field: 'vote_place_id',
    references: {
      model: VOTE_PLACE_TABLE,
      key: 'id'
    }
  },
  table: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  gender: {
    allowNull: false,
    type: DataTypes.CHAR(5)
  },
  bloodType: {
    type: DataTypes.CHAR(5),
    field: 'blood_type'
  },
  occupation: {
    type: DataTypes.STRING
  },
  profession: {
    allowNull: false,
    type: DataTypes.STRING
  },
  population: {
    type: DataTypes.STRING
  },
  academicProfile: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'academic_profile'
  },
  description: {
    type: DataTypes.TEXT
  },
  observations: {
    type: DataTypes.TEXT
  },
  politicalState: {
    type: DataTypes.STRING,
    field: 'political_state'
  },
  campaignId: {
    allowNull: true,
    type: DataTypes.BIGINT,
    field: 'campaign_id',
    references: {
      model: CAMPAIGN_TABLE,
      key: 'id'
    }
  },
  createdBy: {
    allowNull: false,
    field: 'created_by',
    type: DataTypes.BIGINT
  },
  createdAt: {
    allowNull: false,
    field: 'created_at',
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    allowNull: false,
    field: 'updated_at',
    type: DataTypes.DATE
  },
  isVoted: {
    allowNull: true,
    field: 'is_voted',
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  votedDate: {
    allowNull: true,
    field: 'voted_date',
    type: DataTypes.DATE
  }
};

/* const PEOPLE_INDEXES = {
  indexes: [
    {
      name: 'identificationNumber_campaignId_index',
      fields: ['identificationNumber', 'campaignId']
    }
  ]
} */

  class People extends Model {
    static associate(models) {
      this.belongsTo(models?.Departament, { as: 'departament'});
      this.belongsTo(models?.Municipality, { as: 'municipality'});
      this.belongsTo(models?.Candidate, { as: 'candidate'});
      this.belongsTo(models?.VotePlace, { as: 'voteplace'});
      this.belongsTo(models?.User, { foreignKey: 'user_id', as: 'user'});
      this.belongsTo(models?.User, { foreignKey: 'leader_id', as: 'leader' });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: PEOPLE_TABLE,
            modelName: 'People',
            timestamps: true
        }
    }
  }

  export {
    PEOPLE_TABLE, PEOPLE_SCHEMA, People
  }
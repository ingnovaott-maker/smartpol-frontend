import { User, USER_SCHEMA } from "./user.js";
import { People, PEOPLE_SCHEMA } from "./people.js";
import { Candidate, CANDIDATE_SCHEMA } from "./candidate.js";
import { Departament, DEPARTAMENT_SCHEMA } from "./departament.js";
import { Municipality, MUNICIPALITY_SCHEMA } from "./municipality.js";
import { Campaign, CAMPAIGN_SCHEMA } from "./campaign.js";
import { VotePlace, VOTE_PLACE_SCHEMA } from "./votePlace.js";

export function setupModels(sequelize) {
  Campaign.init(CAMPAIGN_SCHEMA, Campaign.config(sequelize));
  User.init(USER_SCHEMA, User.config(sequelize));
  People.init(PEOPLE_SCHEMA, People.config(sequelize));
  Departament.init(DEPARTAMENT_SCHEMA, Departament.config(sequelize));
  Municipality.init(MUNICIPALITY_SCHEMA, Municipality.config(sequelize));
  Candidate.init(CANDIDATE_SCHEMA, Candidate.config(sequelize));
  VotePlace.init(VOTE_PLACE_SCHEMA, VotePlace.config(sequelize));

  //Hook
  People.addHook("afterCreate", (people) => {
    delete people?.dataValues?.createdAt, delete people?.dataValues?.updatedAt;
  });
  Candidate.addHook("afterCreate", (people) => {
    delete people?.dataValues?.createdAt, delete people?.dataValues?.updatedAt;
  });
  People.addHook("afterFind", (user) => {
    delete user?.dataValues?.createdAt, delete user?.dataValues?.updatedAt;
  });
  User.addHook("afterFind", (user) => {
    delete user?.dataValues?.createdAt, delete user?.dataValues?.updatedAt;
  });

  //Relationsd
  Campaign.associate(sequelize.models);
  Departament.associate(sequelize.models);
  Municipality.associate(sequelize.models);
  People.associate(sequelize.models);
  User.associate(sequelize.models);
  Candidate.associate(sequelize.models);
  VotePlace.associate(sequelize.models);
}

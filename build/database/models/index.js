"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupModels = setupModels;
var _user = require("./user.js");
var _people = require("./people.js");
var _candidate = require("./candidate.js");
var _departament = require("./departament.js");
var _municipality = require("./municipality.js");
var _campaign = require("./campaign.js");
var _votePlace = require("./votePlace.js");
function setupModels(sequelize) {
  _campaign.Campaign.init(_campaign.CAMPAIGN_SCHEMA, _campaign.Campaign.config(sequelize));
  _user.User.init(_user.USER_SCHEMA, _user.User.config(sequelize));
  _people.People.init(_people.PEOPLE_SCHEMA, _people.People.config(sequelize));
  _departament.Departament.init(_departament.DEPARTAMENT_SCHEMA, _departament.Departament.config(sequelize));
  _municipality.Municipality.init(_municipality.MUNICIPALITY_SCHEMA, _municipality.Municipality.config(sequelize));
  _candidate.Candidate.init(_candidate.CANDIDATE_SCHEMA, _candidate.Candidate.config(sequelize));
  _votePlace.VotePlace.init(_votePlace.VOTE_PLACE_SCHEMA, _votePlace.VotePlace.config(sequelize));

  //Hook
  _people.People.addHook("afterCreate", function (people) {
    var _people$dataValues, _people$dataValues2;
    people === null || people === void 0 || (_people$dataValues = people.dataValues) === null || _people$dataValues === void 0 || delete _people$dataValues.createdAt, people === null || people === void 0 || (_people$dataValues2 = people.dataValues) === null || _people$dataValues2 === void 0 || delete _people$dataValues2.updatedAt;
  });
  _candidate.Candidate.addHook("afterCreate", function (people) {
    var _people$dataValues3, _people$dataValues4;
    people === null || people === void 0 || (_people$dataValues3 = people.dataValues) === null || _people$dataValues3 === void 0 || delete _people$dataValues3.createdAt, people === null || people === void 0 || (_people$dataValues4 = people.dataValues) === null || _people$dataValues4 === void 0 || delete _people$dataValues4.updatedAt;
  });
  _people.People.addHook("afterFind", function (user) {
    var _user$dataValues, _user$dataValues2;
    user === null || user === void 0 || (_user$dataValues = user.dataValues) === null || _user$dataValues === void 0 || delete _user$dataValues.createdAt, user === null || user === void 0 || (_user$dataValues2 = user.dataValues) === null || _user$dataValues2 === void 0 || delete _user$dataValues2.updatedAt;
  });
  _user.User.addHook("afterFind", function (user) {
    var _user$dataValues3, _user$dataValues4;
    user === null || user === void 0 || (_user$dataValues3 = user.dataValues) === null || _user$dataValues3 === void 0 || delete _user$dataValues3.createdAt, user === null || user === void 0 || (_user$dataValues4 = user.dataValues) === null || _user$dataValues4 === void 0 || delete _user$dataValues4.updatedAt;
  });

  //Relationsd
  _campaign.Campaign.associate(sequelize.models);
  _departament.Departament.associate(sequelize.models);
  _municipality.Municipality.associate(sequelize.models);
  _people.People.associate(sequelize.models);
  _user.User.associate(sequelize.models);
  _candidate.Candidate.associate(sequelize.models);
  _votePlace.VotePlace.associate(sequelize.models);
}
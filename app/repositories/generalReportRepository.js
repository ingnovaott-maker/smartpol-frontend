import { Op, QueryTypes } from "sequelize";
import sequelize from "../database/sequelize.js";
import { ROLES_OBJECT } from "../utils/enums/rolesEnum.js";
export class GeneralReportRepository {
  async countVoters(campaignId) {
    const { People } = sequelize.models;
    return await People.count({
      where: {
        userId: null,
        campaignId,
      },
    });
  }

  async countCandidates(campaignId) {
    const { Candidate } = sequelize.models;
    return await Candidate.count({
      where: {
        campaignId,
      },
    });
  }

  async countRegisteredVotes(campaignId) {
    const { People } = sequelize.models;
    return await People.count({
      where: {
        userId: null,
        isVoted: true,
        campaignId,
      },
    });
  }

  async countPendingVotes(campaignId) {
    const { People } = sequelize.models;
    return await People.count({
      where: {
        userId: null,
        campaignId,
        [Op.or]: [
          { isVoted: false }, 
          { isVoted: null } 
        ]
      },
    });
  }

  async countLeaders(campaignId) {
    const { User } = sequelize.models;
    return await User.count({
      where: {
        campaignId,
        role: ROLES_OBJECT.LIDER,
      },
    });
  }

  async voteCountByCandidate(campaignId) {
    const queryString = `SELECT 
    can.id,
    can.identification_number,
    can.name, can.last_name,
    COUNT(p.id) inscritos,
    SUM(CASE WHEN p.is_voted=TRUE THEN 1 ELSE 0 END) AS reportados, 
    SUM(CASE WHEN (p.is_voted=FALSE OR p.is_voted IS NULL) THEN 1 ELSE 0 END) AS pendientes
    FROM candidates can
    INNER JOIN people p ON p.candidate_id = can.id
    WHERE p.user_id IS NULL
    AND p.campaign_id=${campaignId}
    GROUP BY can.id`;
    return await sequelize.query(queryString, {
      raw: true,
      type: QueryTypes.SELECT,
    });
  }
  async voteCountByVotePlace(campaignId) {
    const queryString = `SELECT 
    vp.id,
    vp.name,
    COUNT(p.id) inscritos,
    SUM(CASE WHEN p.is_voted=TRUE THEN 1 ELSE 0 END) AS reportados, 
    SUM(CASE WHEN (p.is_voted=FALSE OR p.is_voted IS NULL) THEN 1 ELSE 0 END) AS pendientes
    FROM vote_places vp
    INNER JOIN people p ON p.vote_place_id = vp.id
    WHERE p.user_id IS NULL
    AND p.campaign_id=${campaignId}
    GROUP BY vp.id`;
    return await sequelize.query(queryString, {
      raw: true,
      type: QueryTypes.SELECT,
    });
  }

  async voteCountByPoliticParty(campaignId) {
    //AND can.politic_party=${politicparty?.toUpperCase()}
    const queryString = `SELECT 
    can.politic_party,
    COUNT(p.id) inscritos,
    SUM(CASE WHEN p.is_voted=TRUE THEN 1 ELSE 0 END) AS reportados, 
    SUM(CASE WHEN (p.is_voted=FALSE OR p.is_voted IS NULL) THEN 1 ELSE 0 END) AS pendientes
    FROM candidates can
    INNER JOIN people p ON p.candidate_id = can.id
    WHERE p.user_id IS NULL
    AND p.campaign_id=${campaignId}
    GROUP BY can.politic_party`;
    return await sequelize.query(queryString, {
      raw: true,
      type: QueryTypes.SELECT,
    });
  }

  async voteCountByNeighborhood(campaignId) {
    const queryString = `SELECT 
    p.neighborhood,
    COUNT(p.id) inscritos,
    SUM(CASE WHEN p.is_voted=TRUE THEN 1 ELSE 0 END) AS reportados, 
    SUM(CASE WHEN (p.is_voted=FALSE OR p.is_voted IS NULL) THEN 1 ELSE 0 END) AS pendientes
    FROM people p
    WHERE p.user_id IS NULL
    AND p.neighborhood <> ''
    AND p.campaign_id=${campaignId}
    GROUP BY p.neighborhood`;
    return await sequelize.query(queryString, {
      raw: true,
      type: QueryTypes.SELECT,
    });
  }

  async voteCountByLeader(campaignId) {
    const queryString = `SELECT 
    us.name,
    us.role,
    COUNT(p.id) inscritos,
    SUM(CASE WHEN p.is_voted=TRUE THEN 1 ELSE 0 END) AS reportados, 
    SUM(CASE WHEN (p.is_voted=FALSE OR p.is_voted IS NULL) THEN 1 ELSE 0 END) AS pendientes
    FROM users us
    INNER JOIN people p ON p.leader_id = us.id
    WHERE p.user_id IS NULL
    AND p.campaign_id=${campaignId}
    GROUP BY us.id`;
    return await sequelize.query(queryString, {
      raw: true,
      type: QueryTypes.SELECT,
    });
  }
}

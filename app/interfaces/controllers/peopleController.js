import { CreatePeopleAndUserUseCase } from "../../useCases/people/createPeopleAndUserUseCase.js";
import { FindPeopleByIdUseCase } from "../../useCases/people/findByIdUseCase.js";
import { UpdatePeopleUseCase } from "../../useCases/people/updatePeopleUseCase.js";
import { FindByFilterUseCase } from "../../useCases/people/findByFilterUseCase.js";
import { FindByCampaignUseCase } from "../../useCases/people/findByCampaingUseCase.js";
import { FindByCreatedByUseCase } from "../../useCases/people/findByCreatedByUseCase.js";
import { ReportVoteUseCase } from "../../useCases/people/reportVoteUseCase.js";
import { FindPeopleByIdetificationUseCase } from "../../useCases/people/findByIdentificationUseCase.js";
import { FindPeopleByIdetificationPaginateUseCase } from "../../useCases/people/findByIdentificationPaginateUseCase.js";
//Reports
import { GenerateGeneralReportUseCase } from "../../useCases/report/generateGeneralReportUseCase.js";
import { GenerateGeneralReportLeaderUseCase } from "../../useCases/report/generateGeneralReportLeaderUseCase.js";
import { GenerateGeneralReportCandidateUseCase } from "../../useCases/report/generateGeneralReportCandidateUseCase.js";
import { GenerateGeneralReportVotePlaceUseCase } from "../../useCases/report/generateGeneralReportVotePlaceUseCase.js";
import { GenerateGeneralReportPoliticPartyUseCase } from "../../useCases/report/generateGeneralReportPoliticPartyUseCase.js";
import { GenerateGeneralReportNeighborhoodUseCase } from "../../useCases/report/generateGeneralReportNeighborhoodUseCase.js";
//
import { Response } from "../middlewares/response.js";
//utils
import { exportToExcel } from "../../utils/report/excelReport.js";
import { ROLES_OBJECT } from "../../utils/enums/rolesEnum.js";

export class PeopleController {
  constructor() {
    this.createPeopleAndUserUseCase = new CreatePeopleAndUserUseCase();
    this.updatePeopleUseCase = new UpdatePeopleUseCase();
    this.findByFilterUseCase = new FindByFilterUseCase();
    this.findPeopleByIdUseCase = new FindPeopleByIdUseCase();
    this.findPeopleByIdetificationUseCase = new FindPeopleByIdetificationUseCase();
    this.findPeopleByIdetificationPaginateUseCase = new FindPeopleByIdetificationPaginateUseCase();
    this.findByCampaignUseCase = new FindByCampaignUseCase();
    this.findByCreatedByUseCase = new FindByCreatedByUseCase();
    this.reportVoteUseCase = new ReportVoteUseCase();
    this.generateGeneralReportUseCase = new GenerateGeneralReportUseCase();
    this.generateGeneralReportLeaderUseCase = new GenerateGeneralReportLeaderUseCase();
    this.generateGeneralReportCandidateUseCase = new GenerateGeneralReportCandidateUseCase();
    this.generateGeneralReportVotePlaceUseCase = new GenerateGeneralReportVotePlaceUseCase();
    this.generateGeneralReportPoliticPartyUseCase = new GenerateGeneralReportPoliticPartyUseCase();
    this.generateGeneralReportNeighborhoodUseCase = new GenerateGeneralReportNeighborhoodUseCase();
  }

  async createWithUser(req, res, next) {
    try {
      const data = {
        ...req.body,
        campaignId: req.user.campaignId,
        createdBy: req.user.sub,
      };
      const people = await this.createPeopleAndUserUseCase.execute(data);
      res.status(201).json(Response.ok(people, 201));
    } catch (error) {
      next(error);
    }
  }

  async findByIdentification(req, res, next) {
    try {
      const { identification } = req.params;
      const result = await this.findPeopleByIdetificationUseCase.execute(
        identification
      );
      res.status(200).json(Response.ok(result));
    } catch (error) {
      next(error);
    }
  }

  async findByIdentificationPaginated(req, res, next) {
    try {
      const { identification } = req.params;
      const { page, pageSize } = req.query;
      const { campaignId } = req.user;
      const result = await this.findPeopleByIdetificationPaginateUseCase.execute(
        identification, campaignId, page, pageSize
      );
      res.status(200).json(Response.ok(result));
    } catch (error) {
      next(error);
    }
  }

  async findById(req, res, next) {
    try {
      const { id } = req.params;
      const people = await this.findPeopleByIdUseCase.execute(id);
      res.status(200).json(Response.ok(people));
    } catch (error) {
      next(error);
    }
  }

  async findByCampaign(req, res, next) {
    let people;
    try {
      const { campaignId, role, sub } = req.user;
      const { page, pageSize } = req.query;
      if (role === ROLES_OBJECT.CANDIDATO) {
        people = await this.findByCreatedByUseCase.execute(sub, page, pageSize);
      } else {
        people = await this.findByCampaignUseCase.execute(campaignId, page, pageSize);
      }
      res.status(200).json(Response.ok(people));
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body;
      const peopleUdated = await this.updatePeopleUseCase.execute(id, data);
      res.status(200).json(Response.ok(peopleUdated));
    } catch (error) {
      next(error);
    }
  }

  async findByFilter(req, res, next) {
    try {
      const { query } = req;
      const people = await this.findByFilterUseCase.execute(query);
      res.status(200).json(Response.ok(people));
    } catch (error) {
      next(error);
    }
  }

  async exportToExcel(req, res, next) {
    try {
      const { query } = req;
      const people = await this.findByFilterUseCase.executeReposrt(query);
      // Llama a la función para exportar a Excel
      const excelBuffer = await exportToExcel(people);

      // Configura la respuesta para descargar el archivo Excel
      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=Personas.xlsx"
      );
      res.end(excelBuffer, "binary");
    } catch (error) {
      next(error);
    }
  }

  async reportVote(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body;
      const peopleUdated = await this.reportVoteUseCase.execute(id, data);
      res.status(200).json(Response.ok(peopleUdated));
    } catch (error) {
      next(error);
    }
  }

  async generateGeneralReport(req, res, next) {
    try {
      const { campaignId } = req.user;
      const result = await this.generateGeneralReportUseCase.execute(campaignId);
      res.status(200).json(Response.ok(result));
    } catch (error) {
      next(error);
    }
  }

  async generateGeneralReportByCandidates(req, res, next) {
    try {
      const { campaignId } = req.user;
      const result = await this.generateGeneralReportCandidateUseCase.execute(campaignId);
      res.status(200).json(Response.ok(result));
    } catch (error) {
      next(error);
    }
  }
  async generateGeneralReportByVotePlaces(req, res, next) {
    try {
      const { campaignId } = req.user;
      const result = await this.generateGeneralReportVotePlaceUseCase.execute(campaignId);
      res.status(200).json(Response.ok(result));
    } catch (error) {
      next(error);
    }
  }

  async generateGeneralReportByPoliticParty(req, res, next) {
    try {
      const { campaignId } = req.user;
      const result = await this.generateGeneralReportPoliticPartyUseCase.execute(campaignId);
      res.status(200).json(Response.ok(result));
    } catch (error) {
      next(error);
    }
  }

  async generateGeneralReportByNeighborhoods(req, res, next) {
    try {
      const { campaignId } = req.user;
      const result = await this.generateGeneralReportNeighborhoodUseCase.execute(campaignId);
      res.status(200).json(Response.ok(result));
    } catch (error) {
      next(error);
    }
  }

  async generateGeneralReportByLeaders(req, res, next) {
    try {
      const { campaignId } = req.user;
      const result = await this.generateGeneralReportLeaderUseCase.execute(campaignId);
      res.status(200).json(Response.ok(result));
    } catch (error) {
      next(error);
    }
  }
}

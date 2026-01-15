const {
  FindByCampaignUseCase,
} = require("../../../../app/useCases/people/findByCampaingUseCase.js");
const {
  PeopleRepository,
} = require("../../../../app/repositories/peopleRepository.js");
const {
  SummaryPeopleDTO,
} = require("../../../../app/entities/dto/people/summaryPeopleDTO.js");

jest.mock("sequelize");
jest.mock("../../../../app/repositories/peopleRepository.js");
jest.mock("../../../../app/entities/dto/people/summaryPeopleDTO.js");
describe("findByCampaingUseCase", () => {
  const campaignId = 1;
  const peopleDataMock = [
    { id: 1, name: "Jhon", identification: "123456" },
    { id: 2, name: "Siri", identification: "654321" },
  ];
  const summaryPeopleMock = [
    { id: 1, name: "Jhon" },
    { id: 2, name: "Siri" },
  ];
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test("Deberia retornar una lista de SummaryPeopleDTO correctamente", async () => {
    //Arrange
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "findByCampaign")
      .mockResolvedValue(peopleDataMock);
    SummaryPeopleDTO.create = jest.fn().mockImplementation(({ id, name }) => {
      return { id, name };
    });
    const findByCampaignUseCase = new FindByCampaignUseCase();

    //Act
    const result = await findByCampaignUseCase.execute(campaignId);
    //Assert
    expect(peopleRepositoryMock).toHaveBeenCalled();
    expect(peopleRepositoryMock).toHaveBeenCalledTimes(1);
    expect(peopleRepositoryMock).toHaveBeenCalledWith(campaignId);

    expect(SummaryPeopleDTO.create).toHaveBeenCalled();
    expect(SummaryPeopleDTO.create).toHaveBeenCalledTimes(2);
    expect(SummaryPeopleDTO.create).toHaveBeenCalledWith(peopleDataMock[0]);
    expect(SummaryPeopleDTO.create).toHaveBeenCalledWith(peopleDataMock[1]);

    expect(result).toEqual(summaryPeopleMock);
  });

  test('Deberia lanzar error si falla el llamado al metodo del repositorio "findByCampaign"', async () => {
    //Arrange
    const errorMessage = "findByCampaign failed";
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "findByCampaign")
      .mockRejectedValue(new Error(errorMessage));

    SummaryPeopleDTO.create = jest.fn().mockImplementation(({ id, name }) => {
      return { id, name };
    });

    const findByCampaignUseCase = new FindByCampaignUseCase();

    try {
      //Act
      await findByCampaignUseCase.execute(campaignId);
    } catch (error) {
      //Assert
      expect(peopleRepositoryMock).toHaveBeenCalled();
      expect(peopleRepositoryMock).toHaveBeenCalledTimes(1);
      expect(peopleRepositoryMock).toHaveBeenCalledWith(campaignId);

      expect(SummaryPeopleDTO.create).not.toHaveBeenCalled();

      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(errorMessage);
    }
  });

  test('Deberia lanzar error si falla el llamado a SummaryPeopleDTO', async () => {
    //Arrange
    const errorMessage = "SummaryPeopleDTO  Failed";
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "findByCampaign")
      .mockResolvedValue(peopleDataMock);
      SummaryPeopleDTO.create = jest.fn().mockImplementation(({ id, name }) => {
        throw new Error(errorMessage);
      });

    const findByCampaignUseCase = new FindByCampaignUseCase();

    try {
      //Act
      await findByCampaignUseCase.execute(campaignId);
    } catch (error) {
      //Assert
      expect(peopleRepositoryMock).toHaveBeenCalled();
      expect(peopleRepositoryMock).toHaveBeenCalledTimes(1);
      expect(peopleRepositoryMock).toHaveBeenCalledWith(campaignId);

      expect(SummaryPeopleDTO.create).toHaveBeenCalled();
      expect(SummaryPeopleDTO.create).toHaveBeenCalledTimes(2);
      expect(SummaryPeopleDTO.create).toHaveBeenCalledWith(peopleDataMock[0]);
      expect(SummaryPeopleDTO.create).toHaveBeenCalledWith(peopleDataMock[1]);

      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(errorMessage);
    }
  });
});

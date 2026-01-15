const {
  FindPeopleByIdetificationUseCase,
} = require("../../../../app/useCases/people/findByIdentificationUseCase.js");
const {
  PeopleRepository,
} = require("../../../../app/repositories/peopleRepository.js");
const {
  SummaryPeopleDTO,
} = require("../../../../app/entities/dto/people/summaryPeopleDTO.js");

jest.mock("sequelize");
jest.mock("../../../../app/repositories/peopleRepository.js");
jest.mock("../../../../app/entities/dto/people/summaryPeopleDTO.js");
describe("findByFilterUseCase", () => {
  const identificationMock = "123";
  const campaignIdMock = 1;
  const peopleDataMock = {
    id: 123,
    name: "Jhon",
    campaignId: 1,
    createdAt: "2020-12-21",
  };
  const summaryPeopleMock = {
    id: 123,
    name: "Jhon",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test("Deberia retornar un objeto SummaryPeopleDTO correctamente", async () => {
    //Arrange
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "findByIdentification")
      .mockResolvedValue(peopleDataMock);
    SummaryPeopleDTO.create.mockResolvedValue(summaryPeopleMock);
    const findPeopleByIdetificationUseCase =
      new FindPeopleByIdetificationUseCase();

    //Act
    const result = await findPeopleByIdetificationUseCase.execute(
      identificationMock,
      campaignIdMock
    );
    //Assert
    expect(peopleRepositoryMock).toHaveBeenCalled();
    expect(peopleRepositoryMock).toHaveBeenCalledTimes(1);
    expect(peopleRepositoryMock).toHaveBeenCalledWith(
      identificationMock,
      campaignIdMock
    );

    expect(SummaryPeopleDTO.create).toHaveBeenCalled();
    expect(SummaryPeopleDTO.create).toHaveBeenCalledTimes(1);
    expect(SummaryPeopleDTO.create).toHaveBeenCalledWith(peopleDataMock);

    expect(result).toEqual(summaryPeopleMock);
  });

  test("Deberia lanzar error si falla el llamado al repositorio", async () => {
    //Arrange
    const errorMessage = "findByIdentification Failed";
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "findByIdentification")
      .mockRejectedValue(new Error(errorMessage));
      SummaryPeopleDTO.create.mockResolvedValue(summaryPeopleMock);
    const findPeopleByIdetificationUseCase =
      new FindPeopleByIdetificationUseCase();

    try {
      //Act
      await findPeopleByIdetificationUseCase.execute(
        identificationMock,
        campaignIdMock
      );
    } catch (error) {
      //Assert
      expect(peopleRepositoryMock).toHaveBeenCalled();
      expect(peopleRepositoryMock).toHaveBeenCalledTimes(1);
      expect(peopleRepositoryMock).toHaveBeenCalledWith(
        identificationMock,
        campaignIdMock
      );

      expect(SummaryPeopleDTO.create).not.toHaveBeenCalled();

      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(errorMessage);
    }
  });

  test("Deberia lanzar error si falla el llamado a SummaryPeopleDTO", async () => {
    //Arrange
    const errorMessage = "SummaryPeopleDTO Failed";
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "findByIdentification")
      .mockResolvedValue(peopleDataMock);
      SummaryPeopleDTO.create.mockRejectedValue(new Error(errorMessage));
    const findPeopleByIdetificationUseCase = new FindPeopleByIdetificationUseCase();

    try {
      //Act
      await findPeopleByIdetificationUseCase.execute(
        identificationMock,
        campaignIdMock
      );
    } catch (error) {
      //Assert
      expect(peopleRepositoryMock).toHaveBeenCalled();
      expect(peopleRepositoryMock).toHaveBeenCalledTimes(1);
      expect(peopleRepositoryMock).toHaveBeenCalledWith(
        identificationMock,
        campaignIdMock
      );

      expect(SummaryPeopleDTO.create).toHaveBeenCalled();
      expect(SummaryPeopleDTO.create).toHaveBeenCalledTimes(1);
      expect(SummaryPeopleDTO.create).toHaveBeenCalledWith(peopleDataMock);

      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(errorMessage);
    }
  });
});

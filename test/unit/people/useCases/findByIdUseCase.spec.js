const {
  FindPeopleByIdUseCase,
} = require("../../../../app/useCases/people/findByIdUseCase.js");
const {
  PeopleRepository,
} = require("../../../../app/repositories/peopleRepository.js");
const {
  SummaryPeopleDTO,
} = require("../../../../app/entities/dto/people/summaryPeopleDTO.js");

jest.mock("sequelize");
jest.mock("../../../../app/repositories/peopleRepository.js");
jest.mock("../../../../app/entities/dto/people/summaryPeopleDTO.js");
describe("findByIdUseCase", () => {
  const paramMock = 123;
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

  test("Deberia retornar un objeto de SummaryPeopleDTO correctamente", async () => {
    //Arrange
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "findById")
      .mockResolvedValue(peopleDataMock);
    SummaryPeopleDTO.create.mockResolvedValue(summaryPeopleMock);
    const findPeopleByIdUseCase = new FindPeopleByIdUseCase();

    //Act
    const result = await findPeopleByIdUseCase.execute(paramMock);
    //Assert
    expect(peopleRepositoryMock).toHaveBeenCalled();
    expect(peopleRepositoryMock).toHaveBeenCalledTimes(1);
    expect(peopleRepositoryMock).toHaveBeenCalledWith(paramMock);

    expect(SummaryPeopleDTO.create).toHaveBeenCalled();
    expect(SummaryPeopleDTO.create).toHaveBeenCalledTimes(1);
    expect(SummaryPeopleDTO.create).toHaveBeenCalledWith(peopleDataMock);

    expect(result).toEqual(summaryPeopleMock);
  });

  test("Deberia lanzar error si falla el llamado al repositorio", async () => {
    //Arrange
    const errorMessage = "findByIdentification Failed";
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "findById")
      .mockRejectedValue(new Error(errorMessage));
    SummaryPeopleDTO.create.mockResolvedValue(summaryPeopleMock);
    const findPeopleByIdUseCase = new FindPeopleByIdUseCase();

    try {
      //Act
      await findPeopleByIdUseCase.execute(paramMock);
    } catch (error) {
      //Assert
      expect(peopleRepositoryMock).toHaveBeenCalled();
      expect(peopleRepositoryMock).toHaveBeenCalledTimes(1);
      expect(peopleRepositoryMock).toHaveBeenCalledWith(paramMock);

      expect(SummaryPeopleDTO.create).not.toHaveBeenCalled();
      expect(SummaryPeopleDTO.create).not.toHaveBeenCalledTimes(1);
      expect(SummaryPeopleDTO.create).not.toHaveBeenCalledWith(peopleDataMock);

      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(errorMessage);
    }
  });

  test("Deberia lanzar error si falla el llamado a SummaryPeopleDTO", async () => {
    //Arrange
    const errorMessage = "SummaryPeopleDTO Failed";
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "findById")
      .mockResolvedValue(peopleDataMock);
    SummaryPeopleDTO.create.mockRejectedValue(new Error(errorMessage));
    const findPeopleByIdUseCase = new FindPeopleByIdUseCase();

    try {
      //Act
      await findPeopleByIdUseCase.execute(paramMock);
    } catch (error) {
      //Assert
      expect(peopleRepositoryMock).toHaveBeenCalled();
      expect(peopleRepositoryMock).toHaveBeenCalledTimes(1);
      expect(peopleRepositoryMock).toHaveBeenCalledWith(paramMock);

      expect(SummaryPeopleDTO.create).toHaveBeenCalled();
      expect(SummaryPeopleDTO.create).toHaveBeenCalledTimes(1);
      expect(SummaryPeopleDTO.create).toHaveBeenCalledWith(peopleDataMock);

      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(errorMessage);
    }
  });
});

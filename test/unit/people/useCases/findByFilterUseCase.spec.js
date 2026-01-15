const {
  FindByFilterUseCase,
} = require("../../../../app/useCases/people/findByFilterUseCase.js");
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
  let paramsFilterMock;
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
    paramsFilterMock = {};
  });

  test("Deberia retornar una lista de SummaryPeopleDTO correctamente", async () => {
    //Arrange
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "findByFilter")
      .mockResolvedValue(peopleDataMock);
    SummaryPeopleDTO.create = jest.fn().mockImplementation(({ id, name }) => {
      return { id, name };
    });
    const findByFilterUseCase = new FindByFilterUseCase();

    //Act
    const result = await findByFilterUseCase.execute(paramsFilterMock);

    expect(peopleRepositoryMock).toHaveBeenCalled();
    expect(peopleRepositoryMock).toHaveBeenCalledTimes(1);
    expect(peopleRepositoryMock).toHaveBeenCalledWith(paramsFilterMock);

    expect(SummaryPeopleDTO.create).toHaveBeenCalled();
    expect(SummaryPeopleDTO.create).toHaveBeenCalledTimes(2);
    expect(SummaryPeopleDTO.create).toHaveBeenCalledWith(peopleDataMock[0]);
    expect(SummaryPeopleDTO.create).toHaveBeenCalledWith(peopleDataMock[1]);

    expect(result).toEqual(summaryPeopleMock);
  });

  test("Deberia lanzar error si falla el llamado al repositorio", async () => {
    //Arrange
    const errorMessage = 'findByFilter Failed';
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "findByFilter")
      .mockRejectedValue(new Error(errorMessage));
    SummaryPeopleDTO.create = jest.fn().mockImplementation(({ id, name }) => {
      return { id, name };
    });
    const findByFilterUseCase = new FindByFilterUseCase();
    
    try {
        //Act
        await findByFilterUseCase.execute(paramsFilterMock);
    } catch (error) {
        expect(peopleRepositoryMock).toHaveBeenCalled();
        expect(peopleRepositoryMock).toHaveBeenCalledTimes(1);
        expect(peopleRepositoryMock).toHaveBeenCalledWith(paramsFilterMock);

        expect(SummaryPeopleDTO.create).not.toHaveBeenCalled();

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toEqual(errorMessage);
    }

  });

  test("Deberia lanzar error si falla el llamado a SummaryPeopleDTO", async () => {
    //Arrange
    const errorMessage = 'SummaryPeopleDTO Failed';
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "findByFilter")
      .mockResolvedValue(peopleDataMock);
    SummaryPeopleDTO.create = jest.fn().mockImplementation(({ id, name }) => {
      throw new Error(errorMessage);
    });
    const findByFilterUseCase = new FindByFilterUseCase();
    
    try {
        //Act
        await findByFilterUseCase.execute(paramsFilterMock);
    } catch (error) {
        expect(peopleRepositoryMock).toHaveBeenCalled();
        expect(peopleRepositoryMock).toHaveBeenCalledTimes(1);
        expect(peopleRepositoryMock).toHaveBeenCalledWith(paramsFilterMock);

        expect(SummaryPeopleDTO.create).toHaveBeenCalled();
        expect(SummaryPeopleDTO.create).toHaveBeenCalledTimes(2);
        expect(SummaryPeopleDTO.create).toHaveBeenCalledWith(peopleDataMock[0]);
        expect(SummaryPeopleDTO.create).toHaveBeenCalledWith(peopleDataMock[1]);

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toEqual(errorMessage);
    }

  });
});

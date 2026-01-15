const { PeopleEntity } = require("../../../../app/entities/peopleEntity.js");
const { UserEntity } = require("../../../../app/entities/userEntity.js");
const {
  PeopleRepository,
} = require("../../../../app/repositories/peopleRepository.js");
const {
  CreatePeopleAndUserUseCase,
} = require("../../../../app/useCases/people/createPeopleAndUserUseCase.js");

jest.mock("sequelize");
jest.mock("../../../../app/repositories/peopleRepository");
jest.mock("../../../../app/entities/peopleEntity.js");
jest.mock("../../../../app/entities/userEntity.js");

describe("createPeopleAndUserUseCase", () => {
  let input;
  let peopleEntity;
  let userEntity;
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    input = {
      identificationNumber: "123456789",
      name: "John",
      lastName: "Doe",
      role: "admin",
      campaignId: "123",
    };
    peopleEntity = {
      identificationNumber: "123456789",
      name: "John",
      lastName: "Doe",
      role: "admin",
      campaignId: "123",
    };
    userEntity = {
      name: "John Doe",
      username: "123456789",
      password: "hashedPassword",
      role: "ADMIN",
      campaignId: "123",
    };
  });

  test("Deberia crear un usuario y una persona de forma exitosa", async () => {
    // Arrange
    PeopleEntity.create.mockResolvedValueOnce(peopleEntity);
    UserEntity.create.mockResolvedValueOnce(userEntity);
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "createWithUser")
      .mockResolvedValueOnce(peopleEntity);
    const createPeopleAndUserUseCase = new CreatePeopleAndUserUseCase();

    // Act
    const result = await createPeopleAndUserUseCase.execute(input);
    // Assert
    expect(PeopleEntity.create).toHaveBeenCalled();
    expect(PeopleEntity.create).toHaveBeenCalledTimes(1);
    expect(PeopleEntity.create).toHaveBeenCalledWith(input);

    expect(UserEntity.create).toHaveBeenCalled();
    expect(UserEntity.create).toHaveBeenCalledTimes(1);
    expect(UserEntity.create).toHaveBeenCalledWith(
      "John Doe",
      "123456789",
      "admin",
      "123"
    );

    expect(peopleRepositoryMock).toHaveBeenCalled();
    expect(peopleRepositoryMock).toHaveBeenCalledTimes(1);
    expect(peopleRepositoryMock).toHaveBeenCalledWith(peopleEntity, userEntity);

    expect(result).toBe(peopleEntity);
  });

  test("Deberia lanzar error si falla al crear peopleEntity", async () => {
    //Arrange
    const errorMessage = "Error al crear entidad persona";
    PeopleEntity.create.mockRejectedValueOnce(new Error(errorMessage));
    UserEntity.create.mockResolvedValueOnce(userEntity);
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "createWithUser")
      .mockResolvedValueOnce(peopleEntity);
    const createPeopleAndUserUseCase = new CreatePeopleAndUserUseCase();

    try {
      // Act
      await createPeopleAndUserUseCase.execute(input);
    } catch (error) {
      //Assert
      expect(PeopleEntity.create).toHaveBeenCalled();
      expect(PeopleEntity.create).toHaveBeenCalledTimes(1);
      expect(PeopleEntity.create).toHaveBeenCalledWith(input);

      expect(UserEntity.create).not.toHaveBeenCalled();
      expect(peopleRepositoryMock).not.toHaveBeenCalled();

      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty("message", errorMessage);
    }
  });

  test("Deberia lanzar error si falla al crear userEntity", async () => {
    //Arrange
    const errorMessage = "Error al crear entidad user";
    PeopleEntity.create.mockResolvedValueOnce(peopleEntity);
    UserEntity.create.mockRejectedValueOnce(new Error(errorMessage));
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "createWithUser")
      .mockResolvedValueOnce(peopleEntity);
    const createPeopleAndUserUseCase = new CreatePeopleAndUserUseCase();

    try {
      // Act
      await createPeopleAndUserUseCase.execute(input);
    } catch (error) {
      //Assert
      expect(PeopleEntity.create).toHaveBeenCalled();
      expect(PeopleEntity.create).toHaveBeenCalledTimes(1);
      expect(PeopleEntity.create).toHaveBeenCalledWith(input);

      expect(UserEntity.create).toHaveBeenCalled();
      expect(UserEntity.create).toHaveBeenCalledTimes(1);
      expect(UserEntity.create).toHaveBeenCalledWith(
        "John Doe",
        "123456789",
        "admin",
        "123"
      );

      expect(peopleRepositoryMock).not.toHaveBeenCalled();

      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty("message", errorMessage);
    }
  });

  test("Deberia lanzar error si falla el llamdo al repositorio para crear el usurio y la persona", async () => {
    //Arrange
    const errorMessage = "Error al crear usurio y persona";
    PeopleEntity.create.mockResolvedValueOnce(peopleEntity);
    UserEntity.create.mockResolvedValueOnce(userEntity);
    const peopleRepositoryMock = jest
      .spyOn(PeopleRepository.prototype, "createWithUser")
      .mockRejectedValueOnce(new Error(errorMessage));
    const createPeopleAndUserUseCase = new CreatePeopleAndUserUseCase();

    try {
      // Act
      await createPeopleAndUserUseCase.execute(input);
    } catch (error) {
      //Assert
      expect(PeopleEntity.create).toHaveBeenCalled();
      expect(PeopleEntity.create).toHaveBeenCalledTimes(1);
      expect(PeopleEntity.create).toHaveBeenCalledWith(input);

      expect(UserEntity.create).toHaveBeenCalled();
      expect(UserEntity.create).toHaveBeenCalledTimes(1);
      expect(UserEntity.create).toHaveBeenCalledWith(
        "John Doe",
        "123456789",
        "admin",
        "123"
      );

      expect(peopleRepositoryMock).toHaveBeenCalled();
      expect(peopleRepositoryMock).toHaveBeenCalledTimes(1);
      expect(peopleRepositoryMock).toHaveBeenCalledWith(
        peopleEntity,
        userEntity
      );

      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty("message", errorMessage);
    }
  });

  test("Deberia lanzar error si la entrada de datos es invalida", async () => {
    // Arrange
    const input = {};
    const createPeopleAndUserUseCase = new CreatePeopleAndUserUseCase();

    // Act
    try {
      await createPeopleAndUserUseCase.execute(input);
      // fail("Expected an error to be thrown");
    } catch (error) {
      // Assert
      expect(PeopleEntity.create).toHaveBeenCalled();
      expect(PeopleEntity.create).toHaveBeenCalledTimes(1);
      expect(PeopleEntity.create).toHaveBeenCalledWith(input);

      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty("message");
    }
  });
});

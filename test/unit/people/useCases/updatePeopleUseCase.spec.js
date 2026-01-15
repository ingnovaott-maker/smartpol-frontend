const {
  PeopleRepository,
} = require("../../../../app/repositories/peopleRepository.js");
const {
  UpdatePeopleUseCase,
} = require("../../../../app/useCases/people/updatePeopleUseCase.js");

const Boom = require("@hapi/boom");

jest.mock("sequelize");
jest.mock("@hapi/boom", () => ({
  notFound: jest.fn(),
}));
jest.mock("../../../../app/repositories/peopleRepository");
describe("UpdatePeopleUseCase", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Deberia actualizar una persona correctamente", async () => {
    const mockRepository = jest
      .spyOn(PeopleRepository.prototype, "update")
      .mockResolvedValueOnce([1]);
    const useCase = new UpdatePeopleUseCase(mockRepository);
    const result = await useCase.execute(1, {});

    expect(result).toEqual({});
    expect(typeof result).toEqual("object");
    expect(mockRepository).toHaveBeenCalled();
    expect(mockRepository).toHaveBeenCalledTimes(1);
    expect(mockRepository).toHaveBeenCalledWith(1, {});
  });

  test("Deberia lanzar error al no encontrar un usuario para actualizar", async () => {
    const mockRepository = jest
      .spyOn(PeopleRepository.prototype, "update")
      .mockResolvedValueOnce([0]);
    Boom.notFound.mockReturnValueOnce(
      new Error("Error al actualizar, usuario no existe")
    );

    const useCase = new UpdatePeopleUseCase(mockRepository);

    try {
      await useCase.execute(1, {});
    } catch (error) {
      expect(error.message).toEqual("Error al actualizar, usuario no existe");
      expect(error).toBeInstanceOf(Error);
      expect(mockRepository).toHaveBeenCalled();
      expect(mockRepository).toHaveBeenCalledTimes(1);
      expect(mockRepository).toHaveBeenCalledWith(1, {});
    }
  });

  test("Deberia lanzar error si ocurre un error en el repositorio", async () => {
    const mockRepository = jest
      .spyOn(PeopleRepository.prototype, "update")
      .mockRejectedValueOnce(new Error("Error al actualizar"));
    Boom.notFound.mockReturnValueOnce(
      new Error("Error al actualizar, usuario no existe")
    );

    const useCase = new UpdatePeopleUseCase(mockRepository);

    try {
      await useCase.execute(1, {});
    } catch (error) {
      expect(error.message).toEqual("Error al actualizar");
      expect(error).toBeInstanceOf(Error);
      expect(mockRepository).toHaveBeenCalled();
      expect(mockRepository).toHaveBeenCalledTimes(1);
      expect(mockRepository).toHaveBeenCalledWith(1, {});
      expect(Boom.notFound).not.toHaveBeenCalled();
      expect(Boom.notFound).not.toHaveBeenCalledTimes(1);
    }
  });
});

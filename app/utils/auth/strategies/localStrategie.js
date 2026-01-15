import { Strategy } from "passport-local";
import boom from "@hapi/boom";
import { comparePassword } from "../../encrypt/passwordEncriptUtils.js";
import { FindUserByUsernameUseCase } from "../../../useCases/user/findUserByUsernameUseCase.js";
import { AuthDTO } from "../../../entities/dto/auth/authDTO.js";

const findUserUseCase = new FindUserByUsernameUseCase();

const localStrategy = new Strategy(async (username, password, done) => {
  try {
    const user = await findUserUseCase.execute(username);
    if (!user) {
      done(boom.notFound("Usuario no existe"), false);
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      done(boom.forbidden("Credenciales inválidas"), false);
    }
    const userAuthDTO = AuthDTO.create(user);
    done(null, userAuthDTO);
  } catch (error) {
    done(error, false);
  }
});

export { localStrategy };

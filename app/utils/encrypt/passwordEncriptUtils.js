import bcrypt from "bcrypt";

const saltRounds = 10;
const hashPassword = async (textPassword) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(textPassword, salt);
    return hash;
  } catch (error) {
    throw new Error('Error al encriptar contraseña');
  }
};

const comparePassword = async (textPassword, hashedPassword) => {
    try {
        const match = await bcrypt.compare(textPassword, hashedPassword);
        return match;
    } catch (error) {
        throw new Error('Error al comparar contraseñas');
    }
}

export { hashPassword, comparePassword }

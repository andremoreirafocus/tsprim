import { hash } from "bcrypt"
import config from "../config"

const createHashPassword = async (password) => {
  const salt = config.auth.SALT;
  return await hash(password, salt)
}

export { createHashPassword };
    
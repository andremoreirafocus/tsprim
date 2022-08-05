import { sign } from "jsonwebtoken";
import config from "../../../config"

const createAuthToken = (user_id) => {
  return sign({}, config.auth.MD5_HASH,
    { subject: user_id, expiresIn: '1d' }
  ) 
}

export { createAuthToken };

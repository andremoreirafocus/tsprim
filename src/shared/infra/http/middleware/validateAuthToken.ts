import { verify } from "jsonwebtoken"
import config from "../../../config";
const validateAuthToken = (token: string) => {
  const { sub } = verify(token, config.auth.MD5_HASH);
  return sub;
}

export { validateAuthToken };
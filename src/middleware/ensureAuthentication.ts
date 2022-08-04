import { NextFunction, Request, Response } from "express";
// import { verify } from "jsonwebtoken"
// import config from "../config";
import AppError from "../errors/AppError"
import UsersDatabaseRepository from "../modules/accounts/repositories/UsersDatabaseRepository";
import { validateAuthToken } from "./validateAuthToken";

export default async function ensureAuthentication (request: Request, response: Response, next: NextFunction)  {
  const usersRepository = new UsersDatabaseRepository();
  if (!request.headers.authorization)
    throw new AppError("Authorization is required!", 401)
  console.log(request.headers.authorization)
  const [,token] = request.headers.authorization.split(" ");
  console.log("tokens", token);
  try {
    console.log("verify");
    // verifies the signature and extracts the user_id from the token
    // const { sub: id } = verify(token, config.auth.MD5_HASH);
    const id = validateAuthToken(token);
    console.log("verified");
    console.log(id);
    const user = await usersRepository.findById(id.toString());
    if (!user) {
      console.log("user not found");
      throw new AppError("Authorization is required!", 401);
    }
    request.user = {
      id: user.id
    }
    next();
  } catch (err) {
    console.log(err);
    throw new AppError("Authorization is required!", 401);
  }
}
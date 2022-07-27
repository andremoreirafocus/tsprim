import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import config from "../config"
import UsersDatabaseRepository from "../modules/accounts/repositories/UsersDatabaseRepository";

export default async function ensureAuthentication (request: Request, response: Response, next: NextFunction)  {
  const usersRepository = new UsersDatabaseRepository();
  if (!request.headers.authorization)
    throw new Error("Authorization is required!")
  console.log(request.headers.authorization)
  const [,token] = request.headers.authorization.split(" ");
  console.log("tokens", token);
  try {
    const { sub: id } = verify(token, config.auth.MD5_HASH);
    console.log(id);
    //@ts-ignore
    const user = await usersRepository.findById(id.toString());
    if (!user) {
      throw new Error("Authorization is required!");
    }
    next();
  } catch (err) {
    return response.status(403).send("Unauthorized!");
  }
}
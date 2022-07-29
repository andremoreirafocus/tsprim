import { inject, injectable } from "tsyringe";
import AppError from "../../../../errors/AppError";
import { IUpdateAvatarRequest, IUpdateAvatarUseCase } from "./IUpdateAvatarUseCase";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { fileRemove } from "../../../../middleware/fileAPI";
import config from "../../../../config";

@injectable()
export default class updateAvatarUseCase implements IUpdateAvatarUseCase {
  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository){}

  async execute({user_id, avatar_file_name}:IUpdateAvatarRequest){   
    console.log(user_id);
    console.log(typeof user_id);
    console.log(avatar_file_name);
    const user = await this.usersRepository.findById(user_id);
    if (!user)
      throw new AppError("Invalid user id");
    if (user.avatar)
      await fileRemove(config.avatarFolder, user.avatar);
    user.avatar = avatar_file_name;
    const savedUser = await this.usersRepository.save(user);
    console.log(savedUser);
  }
}
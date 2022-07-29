interface IUpdateAvatarRequest {
  user_id: string;
  avatar_file_name: string;
}

interface IUpdateAvatarUseCase{
  execute({user_id, avatar_file_name}:IUpdateAvatarRequest): Promise<void>
}

export { IUpdateAvatarRequest, IUpdateAvatarUseCase }
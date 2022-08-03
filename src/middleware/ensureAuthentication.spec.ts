import UsersMemoryRepository from "../modules/accounts/repositories/UsersMemoryRepository";
import { IUsersRepository } from "../modules/accounts/repositories/IUsersRepository";

let usersMemoryRepository: IUsersRepository;

describe("", () => {
  beforeEach(()=>{
    usersMemoryRepository = new UsersMemoryRepository();
  });

  it("", async () => {
    const user = {
      name: "andre",
      password: "123456",
      email: "a@a.com",
      driver_license: "GHGFDS45",
    };
    usersMemoryRepository.create(user);
    const user2 = {
      name: "andre",
      password: "123456",
      email: "a@a.com",
      driver_license: "GHGFDS45",
    };
    usersMemoryRepository.create(user2);
    const users = await usersMemoryRepository.get();
    console.log(users);
  })
}) 
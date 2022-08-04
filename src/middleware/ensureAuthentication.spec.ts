import UsersMemoryRepository from "../modules/accounts/repositories/UsersMemoryRepository";
import { IUsersRepository } from "../modules/accounts/repositories/IUsersRepository";

let usersMemoryRepository: IUsersRepository;

describe("", () => {
  beforeEach(()=>{
    usersMemoryRepository = new UsersMemoryRepository();
  });

  it("User memory repository methods should return accordingly", async () => {
    const user1 = {
      name: "andre",
      password: "123456",
      email: "a@a.com",
      driver_license: "GHGFDS45",
    };
    usersMemoryRepository.create(user1);
    const users1 = await usersMemoryRepository.get();
    console.log(users1);
    expect(users1[0].name).toBe(user1.name);
    expect(users1[0].password).toBe(user1.password);
    expect(users1[0].email).toBe(user1.email);
    expect(users1[0].driver_license).toBe(user1.driver_license);
    const user2 = {
      name: "andre",
      password: "123456",
      email: "a@ab.com",
      driver_license: "GHGFDS45",
    };
    usersMemoryRepository.create(user2);
    const users2 = await usersMemoryRepository.get();
    console.log(users2);
    expect(users2[1].name).toBe(user2.name);
    expect(users2[1].password).toBe(user2.password);
    expect(users2[1].email).toBe(user2.email);
    expect(users2[1].driver_license).toBe(user2.driver_license);
    const user3 = await usersMemoryRepository.findByEmail(user1.email);
    console.log("user3", user3);
    expect(user3.email).toBe(user1.email)
    const user4 = await usersMemoryRepository.findById(user3.id)
    console.log("user4", user4);
    expect(user4.id).toBe(user3.id);
  })
}) 
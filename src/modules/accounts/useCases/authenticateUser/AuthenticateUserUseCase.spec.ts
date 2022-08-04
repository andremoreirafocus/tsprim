import UsersMemoryRepository from "../../repositories/UsersMemoryRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import AuthenticateUserUseCase from "./AuthenticateUserUseCase";
import {IAuthenticateUserUseCase} from "./IAuthenticateUserUseCase";
import {createHashPassword} from "../../../../middleware/createHashPassword"
import {validateAuthToken} from "../../../../middleware/validateAuthToken";

let usersMemoryRepository: IUsersRepository;
let authenticateUserUseCase: IAuthenticateUserUseCase;

describe("", () => {
  beforeEach(()=>{
    usersMemoryRepository = new UsersMemoryRepository();
    authenticateUserUseCase = new AuthenticateUserUseCase(usersMemoryRepository);
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
  });

  it("Should generate a valid token", async () => {
    const typedPassword = "123456"
    const userDTO = {
        name: "trelele",
        email: "a@a.com", 
        password: await createHashPassword(typedPassword),
        driver_license: "GHKJGJK234"
    }
    await usersMemoryRepository.create(userDTO);
    const user = await usersMemoryRepository.findByEmail(userDTO.email);
    console.log(user);
    const authResponse = await authenticateUserUseCase.execute({
        email:userDTO.email, 
        password: typedPassword
    });
    console.log(authResponse);
    expect(authResponse.user.name).toBe(user.name);
    expect(authResponse.user.email).toBe(user.email);
    const id = validateAuthToken(authResponse.token);
    expect(id).toBe(user.id);
  });
}) 
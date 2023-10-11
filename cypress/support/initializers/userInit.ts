import { ICreateUserPayload } from "../API/payload/signupPayload";
import { generateRandomString } from "../helpers/generateHelper";

export default class addUser {
  static initUser(): ICreateUserPayload {
    const payload: ICreateUserPayload = {
      user: {
        username: `mohammad${generateRandomString()}`,
        email: `mohammad${generateRandomString()}@gmail.com`,
        password: "mohammad123",
      },
    };
    return payload;
  }
}

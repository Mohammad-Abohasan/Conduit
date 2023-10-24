import { ICreateUserPayload } from "../API/payload/signupPayload";
import GenericHelper from "../helpers/genericHelper";

export default class addUser {
  static initUser(): ICreateUserPayload {
    const payload: ICreateUserPayload = {
      user: {
        username: `mohammad${GenericHelper.generateRandomString()}`,
        email: `mohammad${GenericHelper.generateRandomString()}@gmail.com`,
        password: "mohammad123",
      },
    };
    return payload;
  }
}

import { generateRandomString } from "../../support/helpers/generateHelper";
import addUser from "../../support/helpers/signupHelper";

describe("Conduit: Signup", () => {
  it("Cxxx1: Conduit - Create new Account", () => {
    addUser.addNewUserUsingAPI(
      `mohammad${generateRandomString()}`,
      `mohammad${generateRandomString()}@gmail.com`,
      "mohammad123"
    );
  });

  it("Cxxx2: Conduit - Create new Account", () => {
    const payload = {
      user: {
        username: `mohammad${generateRandomString()}`,
        email: `mohammad${generateRandomString()}@gmail.com`,
        password: "mohammad123",
      },
    };
    addUser.addNewUserUsingAPI2(payload);
  });
});

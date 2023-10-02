import addUser from "../../support/helpers/signupHelper";

describe("Conduit: Signup", () => {
  it("Cxxx1: Conduit - Create new Account", () => {
    addUser.addNewUserUsingAPI(
      `mohammad${Math.round(Math.random() * 1000)}`,
      `mohammad${Math.round(Math.random() * 1000)}@gmail.com`,
      "mohammad123"
    );
  });

  it("Cxxx2: Conduit - Create new Account", () => {
    const payload = {
      user: {
        username: `mohammad${Math.round(Math.random() * 1000)}`,
        email: `mohammad${Math.round(Math.random() * 1000)}@gmail.com`,
        password: "mohammad123",
      },
    };
    addUser.addNewUserUsingAPI2(payload);
  });
});

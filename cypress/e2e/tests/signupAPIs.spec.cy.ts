import { generateRandomString } from "../../support/helpers/generateHelper";
import addUser from "../../support/helpers/signupHelper";

const baseUrl = Cypress.config().baseUrl;

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

  it("Cxxx3: Conduit - Create new Account", () => {
    const payload = {
      user: {
        username: `mohammad${generateRandomString()}`,
        email: `mohammad${generateRandomString()}@gmail.com`,
        password: "mohammad123",
      },
    };
    cy.apiCall("POST", `${baseUrl}/api/users`, payload);
  });

  it("Cxxx4: Conduit - View all articles", () => {
    cy.apiCall("GET", `${baseUrl}/api/articles`);
  });
});

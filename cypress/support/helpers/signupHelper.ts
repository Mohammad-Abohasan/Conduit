const baseUrl = Cypress.config().baseUrl;

export const URLs = {
  users: `${baseUrl}/api/users`,
};

export default class addUser {
  static addNewUserUsingAPI(username: string, email: string, password: string) {
    cy.api({
      method: "POST",
      url: URLs.users,
      body: {
        user: {
          username,
          email,
          password,
        },
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  }

  static addNewUserUsingAPI2(payload: any) {
    cy.api({
      method: "POST",
      url: URLs.users,
      body: payload,
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  }
}

import userInit from "../initializers/userInit";

export const URLs = {
  users: `/api/users`,
};

export default class addUser {
  static addNewUserUsingAPI() {
    cy.addNewUser("POST", URLs.users, userInit.initUser());
  }
}

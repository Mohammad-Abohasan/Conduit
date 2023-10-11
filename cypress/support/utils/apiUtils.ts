import { ICreateUserPayload } from "../API/payload/signupPayload";
import { ICreateUserResponse } from "../API/response/signupResponse";

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      addNewUser: (
        method: string,
        url: string,
        payload?: ICreateUserPayload
      ) => Chainable<ICreateUserResponse>;
    }
  }
}

Cypress.Commands.add(
  "addNewUser",
  (method: string, url: string, payload?: ICreateUserPayload) => {
    const restAPI: any = {
      GET: { response: 200 },
      POST: { response: 201 },
      PUT: { response: 200 },
      DELETE: { response: 200 },
    };
    return cy
      .api({
        method,
        url,
        body: payload,
      })
      .then((response) => {
        expect(response.status).to.eq(restAPI[method].response);
        return response;
      })
      .its("body");
  }
);

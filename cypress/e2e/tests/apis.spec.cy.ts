describe("APIs", () => {
  it("Registration API", () => {
    cy.request({
      method: "POST",
      url: "/api/users",
      body: {
        user: {
          username: "Mohammad-Abohasan1",
          email: "MohammadAbohasan@gmail.com",
          password: "MohammadAbohasan",
        },
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});

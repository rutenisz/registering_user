describe("Magento registration", () => {
  it("Registers a new user successfully", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );

    cy.get("#firstname").type("John");
    cy.get("#lastname").type("Doe");
    cy.get("#email_address").type(`testuser${Date.now()}@example.com`);
    cy.get("#password").type("Test@1234");
    cy.get("#password-confirmation").type("Test@1234");

    cy.get('button[title="Create an Account"]').click();

    cy.url().should("include", "/customer/account");
    cy.contains("Thank you for registering with Main Website Store").should(
      "be.visible"
    );
  });
});

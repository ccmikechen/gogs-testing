import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I login to the account", function () {
  cy.visit("/user/login");
  cy.fixture("user").then(function (user) {
    cy.get("#user_name").type(user.email);
    cy.get("#password").type(user.password);
  });
  cy.get("button").contains("Sign In").click();
});

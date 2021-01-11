import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open the login page", function () {
  cy.visit("/user/login");
});

And("I enter the email", function () {
  cy.fixture("user").then(function (user) {
    cy.get("#user_name").type(user.email);
  });
});

And("I enter the email with value {string}", function (email) {
  cy.get("#user_name").type(email);
});

And("I enter the password", function () {
  cy.fixture("user").then(function (user) {
    cy.get("#password").type(user.password);
  });
});

And("I enter the password with value {string}", function (password) {
  cy.get("#password").type(password);
});

When("I click {string} button", function (buttonName) {
  cy.get("button").contains(buttonName).click();
});

Then("I see {string}", function (alertMessage) {
  cy.get("p").contains(alertMessage);
});

Then("I see the home page", function () {
  cy.url().should("eq", "https://try.gogs.io/");
});

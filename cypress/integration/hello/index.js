import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open the login page", function () {
  cy.visit("/user/login");
});

Then("I see {string}", function (str) {
  cy.get("h3").contains(str);
});

import { And, When, Then } from "cypress-cucumber-preprocessor/steps";

const repoName = "Test_" + Date.now();

And("I open New Repository page", function () {
  cy.visit("/repo/create");
});

And("I fill the new repository form", function () {
  cy.get("#repo_name").type(repoName);
});

When("I click {string} button", function (buttonName) {
  cy.get("button").contains(buttonName).click();
});

Then("I see the new repository page", function () {
  cy.url().should("include", repoName);
});

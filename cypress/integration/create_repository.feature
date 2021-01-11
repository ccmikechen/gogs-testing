Feature: Create repository

  As a user
  I want to create a repository

  Scenario: Create a repository successfully
    Given I login to the account
    And I open New Repository page
    And I fill the new repository form
    When I click "Create Repository" button
    Then I see the new repository page
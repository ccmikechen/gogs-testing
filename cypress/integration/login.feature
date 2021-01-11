Feature: Login

  As an user
  I want to login with email
  So that I can use the service

  Scenario Outline: Login failed
    Given I open the login page
    And I enter the email with value "<email>"
    And I enter the password with value "<password>"
    When I click "Sign In" button
    Then I see "Username or password is not correct."

    Examples:
    | email             | password         |
    | invalid@email.com | invalid          |
    | aaa@bbb.ccc       | invalid_password |

  Scenario: Login success
    Given I open the login page
    And I enter the email
    And I enter the password
    When I click "Sign In" button
    Then I see the home page
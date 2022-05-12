Feature: Buttons with margins

  Scenario Outline: As a user, click the buttons and things will happen

    Given I am on the helloworld page
    When I click the buttons
    Then I should see the counters incremented

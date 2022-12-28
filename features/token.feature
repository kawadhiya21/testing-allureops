Feature: Testing
  This is description of the test

  Scenario: I create and own a token
    Given I am issuer
    When I create a token with symbol "abc"
    Then I should own a token called "abc"
  
  Scenario: I don't create a token and hence do not own any
    Given I am issuer
    When I create a token with symbol ""
    Then I should not have a token
    
  Scenario: Wow! Creating a new Test Case
    Given I am issuer
    When I create a token with symbol "wow"
    Then I should not have a token "wow"

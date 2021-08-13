Feature: sample

  Scenario:
    Given anonymous user is on main page
    When he puts sample into search
    And he clicks search button
    Then he should receive some results
Feature: Buy a course from the meropadhai.com website

    Background:
    Given user opens the meropadhai website

    Scenario Outline: Buy a course
    When user goes to login page and logs in with email and password 
    And user clicks on the explore button
    And user selects the course '<courseName>'
    And user clicks on the buy now button
    And user choses course pricing for '<month>' and continues
    And user clicks Checkout button, selects e-Sewa payment method and checkout with '<courseName>'
    And user is redirected to e-Sewa website, fills form with your eSewaId and eSewaPassword, buys properly
    Then user is redirected to meropadhai website and '<courseName>' is bought
    Examples:
    | courseName                             | month | 
    | Fundamentals of Financial Management   | 1     |
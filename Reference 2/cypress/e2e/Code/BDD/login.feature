Feature: Mero Padhai

    Background:
    Given user opens the meropadhai website

    Scenario: User goes to login page
    When user clicks on Login button
    Then user should be redirected to Login page

    Scenario: User tries to log in without login credentials
    When user clicks Login button and redirected to Login page
    And user clicks on arrow icon to login
    Then user should see error message

    Scenario: User tries to login with unregistered email
    When user clicks Login button and redirected to Login page
    And user enters unregistered email and password 
    And user clicks on arrow icon for loggin in
    Then user not existing message is shown

    Scenario Outline: User tries to login with short password
    When user clicks Login button and redirected to Login page
    And user enters email and '<password>'
    And user clicks on arrow icon for loggin in
    Then user should password required atleast 8 characters message is shown
    Examples:
    | password  |
    | 1234  |

    Scenario: State Clear
    When user clicks Login button and redirected to Login page
    And user enters email and password
    And user clicks Forgot Password button and redirected to Forgot Password page
    Then user comes back to Login page and previously filled form is cleared

    Scenario Outline: User tries to login with invalid password
    When user clicks Login button and redirected to Login page
    And user enters email and '<password>' 
    And user clicks on arrow icon for loggin in
    Then invalid password message is shown
    Examples:
    | password  |
    | 1234abcd  |

    Scenario: User logins successfully
    When user clicks Login button and redirected to Login page
    And user enters email and password 
    And user clicks on arrow icon for loggin in
    Then user should be successfully logged in and redirected to Home page
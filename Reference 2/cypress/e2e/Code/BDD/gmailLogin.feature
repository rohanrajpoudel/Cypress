Feature: SignUp and Login using Gmail

As a user, I want to sign up and login using my Gmail account so that 
I can use the Mero Padhai Web-app without having to remember another password.
    

    Background:
        Given user opens the meropadhai website

    Scenario: Sign up failed because of trying to signup with already registered account.
    When user clicks on the Register button
    And user clicks on the signup with google button and next window opens
    And user selects the gmail account
    And user clicks on the allow button
    Then user should see the error message "Email already registered"
Feature: Change Contact Number of the user

    As a user, I want to change my contact number

    Background:
        Given user opens the meropadhai website

    Scenario: Click change without typing anything
        When user clicks Login button and redirected to login page
        And user logs in with email and password
        And verify Phone pop up box appears for email but user clicks skip button
        And user is redirected to home page and clicks Profile button
        And user clicks Change button and clicks Submit button
        Then user should see negative  toast message

    Scenario Outline: Enter number and click Cancel button
        When user clicks Login button and redirected to login page
        And user logs in with email and password
        And verify Phone pop up box appears for email but user clicks skip button
        And user is redirected to home page and clicks Profile button
        And user clicks Change button
        And user enters "<number>" in the text box and clicks Cancel button
        Then user clicks Change button and should see the recently typed '<number>' in the text box
        Examples:
            | number |
            | 9841   |

    
    Scenario Outline: Not Equal to 10 numbers shows Invalid Contact Number message
        When user clicks Login button and redirected to login page
        And user logs in with email and password
        And verify Phone pop up box appears for email but user clicks skip button
        And user is redirected to home page and clicks Profile button
        And user clicks Change button
        And user enters '<number>' in the text box and clicks Submit button
        Then user should see Invalid Contact Number message
        Examples:
            | number         |
            | 9841           |
            | 984123456789   |


    Scenario Outline: Already Existed
        When user clicks Login button and redirected to login page
        And user logs in with email and password
        And verify Phone pop up box appears for email but user clicks skip button
        And user is redirected to home page and clicks Profile button
        And user clicks Change button
        And user enters '<number>' in the text box and clicks Submit button
        Then user should see Number Already Existed message
        Examples:
            | number       |
            | 9806762451   |


    Scenario Outline: Types valid number and tries to verify it
        When user clicks Login button and redirected to login page
        And user logs in with email and password
        And verify Phone pop up box appears for email but user clicks skip button
        And user is redirected to home page and clicks Profile button
        And user clicks Change button, enters '<number>' in the text box and clicks Submit button
        And user clicks meropadhai button instead of typing OTP code for '<number>'
        And verify Phone pop up box appears for email and contains recently semi-updated contact '<number>'
        And user clicks skip button, clicks Profile button, and clicks Avatar
        Then user should see the recently semi-updated contact '<number>' in the text box
        Examples:
            | number       |
            | 9827435834   |
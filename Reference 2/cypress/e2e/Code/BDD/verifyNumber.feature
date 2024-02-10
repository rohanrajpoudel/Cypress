Feature: Verify Phone Number

    As a user, I want to verify the phone Number

    Background:
        Given user opens the meropadhai website

    Scenario Outline: Verify Phone Number pops up
        When user clicks Login button and redirected to login page
        And user logs in with '<email>' and '<password>'
        Then verify phone number pop up should appear with '<email>'
        Examples:
            | email                    | password |
            | hanede6825@chnlog.com    | password |

    Scenario Outline: Skip Verify Phone Number Popup box
        When user clicks Login button and redirected to login page
        And user logs in with '<email>' and '<password>'
        And verify phone number pop up should appear with '<email>'
        And user clicks Skip button
        Then user should be redirected to home page
        Examples:
            | email                    | password |
            | hanede6825@chnlog.com    | password |

    Scenario Outline: Type Phone Number and click Skip
        When user clicks Login button and redirected to login page
        And user logs in with '<email>' and '<password>'
        And verify phone number pop up should appear with '<email>'
        And user types '<phone-number>' in phone number field
        And user clicks Skip button
        Then user should be redirected to home page
        Examples:
            | email                    | password | phone-number |
            | hanede6825@chnlog.com    | password | 9848022338   |

    
    Scenario Outline: Type Phone Number, click Skip, logout, login and contact field does not contain your unverified phone number in pop up box
        When user clicks Login button and redirected to login page
        And user logs in with '<email>' and '<password>'
        And verify phone number pop up should appear with '<email>'
        And user types '<phone-number>' in phone number field
        And user clicks Skip button
        And user should be redirected to home page
        And user checks whether the entered '<phone-number>' is not saved in contact field of profile page
        And user logs out from the website
        And user clicks Login button and redirected to login page
        And user logs in with '<email>' and '<password>'
        And verify phone number pop up should appear with '<email>'
        Then contact field should be empty in pop up box

        Examples:
            | email                    | password | phone-number |
            | hanede6825@chnlog.com    | password | 9848022338   |


    Scenario Outline: Try to verify already used phone number
        When user clicks Login button and redirected to login page
        And user logs in with '<email>' and '<password>'
        And verify phone number pop up should appear with '<email>'
        And user types already used '<phone-number>' in phone number field
        And user clicks Verify button and sees error message
        And user checks whether the entered '<phone-number>' is not saved in contact field of profile page
        And user logs out from the website
        And user clicks Login button and redirected to login page
        And user logs in with '<email>' and '<password>'
        And verify phone number pop up should appear with '<email>'
        Then contact field should be empty in pop up box

        Examples:
            | email                   | password | phone-number |
            | xoceya2492@chnlog.com   | password | 9806762451   |


    Scenario Outline: Type Phone Number, click Verify and cancel, logout, login and contact field contains your unverified phone number in pop up box
        When user clicks Login button and redirected to login page
        And user logs in with '<email>' and '<password>'
        And verify phone number pop up should appear with '<email>'
        And user types '<phone-number>' in phone number field
        And user clicks Verify button for '<phone-number>' but cancel the verification
        And user should be redirected to home page
        And user checks whether the entered '<phone-number>' is saved in contact field of profile page
        And user logs out from the website
        And user clicks Login button and redirected to login page
        And user logs in with '<email>' and '<password>'
        And verify phone number pop up should appear with '<email>'
        Then contact field should contain '<phone-number>' in pop up box

        Examples:
            | email                   | password | phone-number |
            | xoceya2492@chnlog.com   | password | 9848022338   |


    Scenario Outline: Type Phone Number, click Verify and verify, logout, login and doesnot see Verify Popup box anymore
        When user clicks Login button and redirected to login page
        And user logs in with '<email>' and '<password>'
        And verify phone number pop up should appear with '<email>'
        And user types '<phone-number>' in phone number field
        And user clicks Verify button for '<phone-number>' and verify the phone number
        And user should be redirected to home page
        And user checks whether the entered '<phone-number>' is saved in contact field of profile page
        And user logs out from the website
        And user clicks Login button and redirected to login page
        And user logs in with '<email>' and '<password>'
        Then user is redirected to home page and doesnot see Verify Popup box anymore

        Examples:
            | email                   | password | phone-number |
            | fomaho3346@dentaltz.com | password | 9819186131   |
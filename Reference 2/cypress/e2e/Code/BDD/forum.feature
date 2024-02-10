Feature: All testcases of FORUM

    Background:
    Given user opens the meropadhai website

    Scenario Outline: Click Publish button without writing any query
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Publish button
    Then user should see the negative toast message
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Write query, click View All Queries, and go back, written query is cleared
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user writes the query in the text box and clicks on Views all queries
    Then user goes back and finds query textarea is cleared
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Select an image, click Publish button without writing any query
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user selects an image and clicks on Publish button
    Then user should see the negative toast message
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Select an image and remove it
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user selects an image and clicks on cross button to remove it
    Then user should see the image is removed
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Select an image and change image
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user selects an image and clicks on change button select another image
    Then user should see the image is changed
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Select an image, click View All Queries, and go back, selected image is cleared
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user selects an image and clicks on Views all queries
    Then user goes back and finds selected image is cleared
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Write query, click Publish including chapter name, query for review message is shown.
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user writes the query in the text box and clicks on Publish button
    Then user includes chapter name and should see the positive toast message
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |   


    Scenario Outline: Write query, click Publish without including chapter name, query for review message is shown.
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user writes the query in the text box and clicks on Publish button
    Then user does not include chapter name and should see the positive toast message
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Write query, select image, click Publish including chapter name.
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user writes the query, add an image and clicks on Publish button
    Then user includes chapter name and should see the positive toast message
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Write query, select image, click Publish without including chapter name.
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user writes the query, add an image and clicks on Publish button
    Then user does not include chapter name and should see the positive toast message
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Write query, select image, remove image, click Publish including chapter name.
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user writes the query, add an image 
    And user removes an image and clicks on Publish button
    Then user includes chapter name and should see the positive toast message
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Write query, select image, change image, click Publish including chapter name.
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user writes the query, add an image 
    And user changes an image and clicks on Publish button
    Then user includes chapter name and should see the positive toast message
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: View all queries
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    Then user sees all the queries associated with '<course>'  
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Click on Add Response button of second query of that course
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks on Add Response button of second query
    Then the textarea for Response is opened
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Click on Add Response button of second query and click Publish without writing response
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks on Add Response button of second query and clicks Publish button
    Then user should see the negative toast message on Forum Page
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Click on Add Response button of second query and select image and click Publish
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks on Add Response button of second query and selects an image and clicks Publish button
    Then user should see the negative toast message on Forum Page
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Click on Add Response button of second query and write response and click Publish
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks on Add Response button of second query and writes response and clicks Publish button
    Then user should see the positive toast message on Forum Page
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Click on Add Response button of second query and write response, selects an image and click Publish
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks on Add Response button of second query and writes response, selects an image and clicks Publish button
    Then user should see the positive toast message on Forum Page
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Click on Add Response button of second query and click Cancel Response
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks on Add Response button of second query and clicks Cancel Response button
    Then the textarea for Response is closed
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Click on Add Response button of second query, writes response, click Cancel Response and again click Add Response
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks on Add Response button of second query and writes response, clicks Cancel Response button and again clicks Add Response button
    Then the textarea for Response is opened and the written response is cleared
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Click on Add Response button of second query, selects an image, click Cancel Response and again click Add response
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks on Add Response button of second query and selects an image, clicks Cancel Response button and again clicks Add Response button
    Then the textarea for Response is opened and the selected image is removed
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Click on Add Response button of second query, writes response, selects an image, click Cancel Response and again click Add response
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks on Add Response button of second query and writes response, selects an image, clicks Cancel Response button and again clicks Add Response button
    Then the textarea for Response is opened and the written response and selected image is removed
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: See one of the query
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>' 
    Then user clicks first query and sees the query
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Select a query and click Add Response
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks first query and clicks Add Response button
    Then the textarea for Response is opened in Query Page
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Select a query, click Add Response, and click Cancel Response
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks first query, clicks Add Response button and clicks Cancel Response button
    Then the textarea for Response is closed in Query Page
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Select a query, click Add Response, write response, and click Cancel Response
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks first query, clicks Add Response button, writes response and clicks Cancel Response button
    Then user clicks Add Response button and the written response is removed
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Select a query, click Add Response, select an image, and click Cancel Response
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks first query, clicks Add Response button, selects an image and clicks Cancel Response button
    Then user clicks Add Response button and the selected image is removed
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Select a query, click Add Response, write response, select an image, and click Cancel Response
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks first query, clicks Add Response button, writes response, selects an image and clicks Cancel Response button
    Then user clicks Add Response button and the written response and selected image is removed
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Select a query, click Add Response, select an image, and publish
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks first query, clicks Add Response button, selects an image and clicks Publish button
    Then negative toast message should be appeared in Query Page
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Select a query, click Add Response, write response, and publish
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks first query, clicks Add Response button, writes response and clicks Publish button
    Then positive toast message should be appeared in Query Page
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Select a query, click Add Response, write response, select an image, and publish
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    And user clicks first query, clicks Add Response button, writes response, selects an image and clicks Publish button
    Then positive toast message should be appeared in Query Page
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |


    Scenario Outline: Select a query, see responses
    When user goes to login page and logs in with email and password
    And user clicks on the My Library button
    And user selects the '<course>' and clicks it
    And user clicks on Forum module
    And user clicks on Views all queries
    And user sees all the queries associated with '<course>'
    Then user clicks first query and user sees all the responses associated with the query
    Examples:
    | course                                 |
    | Fundamentals of Financial Management   |
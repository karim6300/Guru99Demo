# List Of Search functionality Scenario and Test cases in Guru99 Demo application

Feature: Guru99 Features Validation
Scenario: Login Success
Given launch the URL & logged in successful with credentials: username as "testuser@cypresstest.com" and password as "Hello@1234"
Then Validate the Home Page

Scenario: Login Failure
Given launch the URL & logged in successful with credentials: username as "testuser123@cypresstest.com" and password as "Hello@1234"
Then Validate the Error page

Scenario: Request Quotation
Given launch the URL & logged in successful with credentials: username as "testuser@cypresstest.com" and password as "Hello@1234"
When user access the Request Quotation
Then Request Quotation page should be displayed
And Validate the Request Quotation page

Scenario: Retrieve Quotation
Given launch the URL & logged in successful with credentials: username as "testuser@cypresstest.com" and password as "Hello@1234"
When user access the Retrieve Quotation
Then Retrieve Quotation page should be displayed
And Validate the Retrieve Quotation page

Scenario: Profile Page Validation
Given launch the URL & logged in successful with credentials: username as "testuser@cypresstest.com" and password as "Hello@1234"
When user access the Profile Page
Then Profile page should be displayed
And Validate the Profile Page section

Scenario: Edit Profile Page Validation
Given launch the URL & logged in successful with credentials: username as "testuser@cypresstest.com" and password as "Hello@1234"
When user access the Edit Profile Page
Then Edit Profile page should be displayed
And Validate the Edit Profile Page section 
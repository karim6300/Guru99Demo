# Guru99 Demo Application Test Scenarios 

# TC No. 01
Scenario: Login Success
Given launch the URL
When user enters the valid username and password
Then User should log-in successful
And Validate the Home Page

# TC No. 02
Scenario: Login Failure
Given launch the URL
When user enters the in-valid username and password
Then User should be not logged-in successful
And Validate the Error page

# TC No. 03
Scenario: Request Quotation
Given launch the URL & logged in successful
When user access the Request Quotation
Then Request Quotation page should be displayed
And Validate the Request Quotation page

# TC No. 04
Scenario: Retrieve Quotation
Given launch the URL & logged in successful
When user access the Retrieve Quotation
Then Retrieve Quotation page should be displayed
And Validate the Retrieve Quotation page

# TC No. 5
Scenario: Profile Page Validation
Given launch the URL & logged in successful
When user access the Profile Page
Then Profile page should be displayed
And Validate the Profile Page section 

# TC No. 6
Scenario: Edit Profile Page Validation
Given launch the URL & logged in successful
When user access the Edit Profile Page
Then Edit Profile page should be displayed
And Validate the Edit Profile Page section












Interview Reports – With Tasks

You are building a client web app system for tracking job interviews. The system needs to track information about Companies, Candidates and Interviews.
A single Candidate can have an Interview scheduled with one or more Companies. Once the Candidate is involved in an Interview with the sample Company, it can go through several phases. After each phase, a new report is entered into the system.
Each Interview Report must have a flag if the Candidate has passed/not passed the current phase of the Interview.
Only if the Candidate has passed the current phase, a report for the next phase can be added.

Project Structure
Project is divided into two sections. 
First one is a UI for viewing already existing candidates and reports which are created for those candidates. 
(ADDITIONAL, NOT REQUIRED) - Second part is the admin panel which is used for reports management (creation, updating ...). 
Both sections should be parts of a single application which is developed in React. We developed an API for getting data and creating new reports.
It is required to use GIT and GitHub in the whole development process.
Analizy requirements and create tickets (independent from each other if possible)
Use feature branches for each task

Reports API
Regarding interviews reports API you will be using a local web server. Complete API which is needed for developing your tasks can be found at:
https://github.com/nenadbugaric/interviews-reports-api-mock/
Set up instructions:
git clone https://github.com/nenadbugaric/interviews-reports-api-mock/
git checkout auth-client
npm install 
npm start
 On the github repository page you will find all information about how to start a web server and how to use API locally for development.
1. Candidates and Interview Reports overview (Must Have)
Implement responsive public web application, which can be used by anyone, and which is responsible for read-only overview of Candidates and Interview Reports.

Mocks for this task can be found at: https://goo.gl/RL62oL.  All different page mocks for this task can be found in the “Pages” section. Provided mocks are for desktop layout, mobile and tablet layout is left for you to design / organize.

Public web application should consist of:
List of Candidates (landing page)
Candidates will appear in cards layout (see wireframes)
List of Candidates can be filtered by Candidate Name
For each Candidate, Name, Avatar and Email should be shown

Candidate Reports Page
All details about the Candidate should be shown
Name
Avatar
Email
Education
List of all Reports related to the selected Candidate should be shown, including
Company
Interview Date
Status
User should be able to select a Report from the list in order to see a full Report
Report details should be shown in Modal Dialog

[bpf-1] Feature 1
Create a project using create-react-app, connect it to the remote repository and give others collaborator role(blocking other tasks – solve it together)
[bpf-2] Feature 2
As a user I want to have a login page where I can put my credentials
Create login in page to get the accessToken and set it to the app’s state so that you can include it in the requests in the future(use API docs as how to guide)
[bpf-3] Feature 3
As a user I want to have a main(landing) page with a Header which have to navigation items (Candidates and Reports) and Sticky Footer
Create a dummy main page with header and footer and heading stating that you are on a main page
Header should have only one item which will lead to main page (Candidates)




[bpf-4] Feature 4
As a user I want to have Candidate Reports page where I can see reports from a single candidate and I will be guided to this page by clicking on the candidate card
Create a dummy Candidate Reports page and add router to main page so you can navigate to it(navigate to the page by typing url in address bar for now)

[bpf-5] Feature 5
As a user I want to see all candidates on a landing page displayed as cards
Create a Card component and display few cards with dummy data on the page and link it to navigate to the Candidate Reports page when clicked
[bpf-6] Feature 6
As a user I want to see all candidates on a landing page displayed as cards
Fetch all users from the API and include the accessToken in the header of the request
When fetched display the users as cards
[bpf-7] Feature 7
As a user I want to see the detailed info for particular user
Create detailed info section on candidate reports page and fill it with data for a single user
[bpf-8] Feature 8
As a user I want to see the list of reports for the particular user
Create report list(table) on candidate reports page and fill it with the data for the particular user(bloks feture 10)
[bpf-9] Feature 9
As a user I want to be able to search candidates by name
Create Search field on the Candidate page and filter the cards by name typed in the field
[bpf-10] Feature 10
As a user I want to have the ability to open detail view of single report in form of modal
Create a modal that will show detailed report info and fill it with dummy(hardcoded data) till the feature 8 is ready – blocked by feature 8


2. Administrative Panel – Bonus Project Extension
Implement responsive administrative panel web application which is responsible for creating/modifying/deleting Interview Reports.
Wireframes for this task can be found at: https://goo.gl/8Whmw3.
All different page mocks for this task can be found in the “Pages” section. Provided mocks are for desktop layout, mobile and tablet layout is left for students to design / organize.
Administrative Panel application should consist of:
Report List
Reports should be rendered in a list
Each Report can be viewed in more detail or deleted
For viewing report in more details Modal (dialog) is used
List of reports can be filtered by candidate or company name! 
Submit Report Page
Submitting a Report should be done through a “Wizard”
Wizard is constructed from three steps:
Step 1: Select Candidate
Candidates will appear in a list
List of Candidates can be filtered by Candidate Name
When user click on candidate it’s selected
After Candidate is selected “Next” button become enabled and user can click on it
When user click on “Next” button next section “Select Company” should be presented



Step 2: Select a Company
Companies will appear in a list
List of Companies can be filtered by Company Name
After Company is selected “Next” button become enabled and user can click on it
When user click on “Next” button next section “Fill Report Details” should be presented



Step 3: Fill Report Details
User should be able to enter all Report fields
Date/Time
Phase: cv, hr, tech, final
Status: passed, declined
Notes
All inputs should be validated
All input fields are required
Phase must be one of: cv, hr, tech, final
Status must be one of: passed, declined 
Date can not be in the future
Date input should be provided via date-picker component
When the user clicks “Submit” , a request with all data for creating a report is sent.
After successfully created report user is redirected to the landing page

[bpf-11] Feature 11
As a user I want to have ability to open a Reports page
Add another item to header which will lead to Reports page
Create a Reports page with a list of all reports and connect it with router
[bpf-12] Feature 12
Extract Modal component from Candidate report page to a more general level and make it reusable to fit bot reports and candidate reports page
[bpf-13] Feature 13
As a user I want to have a possibility to see detailed view of single report
Add ‘eye’ icon to the report item and make it clickable, when icon is clicked Modal with detailed view will open
[bpf-14] Feature 14
As a user I want to have an option to delete the report
Add delete icon to the report item and make it clickable, when icon is clicked the DELETE request will be sent to the API resulting in report being deleted
[bpf-15] Feature 15
As a user I want to have a button to enter the wizard for creating the report
Create a button with “+” sign to navigate the user on report wizard
Button should be positioned on the bottom right corner of the page and visible when on the Report page
[bpf-16] Feature 16
As a user I want to have option to create a report through the wizard
Create a wizard with and connect it to button to appear when button is clicked
Fill the wizard with first Step 1 selection:
Step 1: Select Candidate
Candidates will appear in a list
List of Candidates can be filtered by Candidate Name
When user click on candidate it’s selected
After Candidate is selected “Next” button become enabled and user can click on it
When user click on “Next” button next section “Select Company” should be presented





[bpf-17] Feature 17
As a user after Step 1 I want to have a option to pick the company
Add Step 2 to the wizard reached after clicking ‘Next’ button on Step 1:
Step 2: Select a Company
Companies will appear in a list
List of Companies can be filtered by Company Name
After Company is selected “Next” button become enabled and user can click on it
When user click on “Next” button next section “Fill Report Details” should be presented
[bpf-18] Feature 18
As a user after Step 2 I want to have a option to write the report
Add Step 3 to the wizard reached after clicking ‘Next’ button on Step 2:
Step 3: Fill Report Details
User should be able to enter all Report fields
Date/Time
Phase: cv, hr, tech, final
Status: passed, declined
Notes
All inputs should be validated
All input fields are required
Phase must be one of: cv, hr, tech, final
Status must be one of: passed, declined 
Date can not be in the future
Date input should be provided via date-picker component
When the user clicks “Submit” , a request with all data for creating a report is sent.
After successfully created report user is redirected to the landing page

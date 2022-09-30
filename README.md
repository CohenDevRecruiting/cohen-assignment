# Development
## Running the Application
[Node](https://nodejs.org/en/) must be installed on your machine.

Install dependencies

```npm i```

Start the application 

```npm run start```

Go to *http://localhost:3000/todos* to verify the application is working. 

# Assignment

For the next phase of the interview process the team at Cohen would like you to create a to-do list application. This should be a web based application. The front-end can be done in whatever SPA framework you’d like. However, we’d strongly prefer the backend be built in Node and use Express to expose a REST API. The API should contain the necessary resource endpoints to support all the front-end functionality.  Data in the backend does not need to be stored in a database. 
Do not be overly concerned with style and design of the application. Just make sure it clearly displays the functionality it is supporting and meets the requirements outlined below.   Likewise, if you run into challenges either completing the application or with particular aspects, it’s ok.  We would still like to see what you accomplished and talk through things with you.

## Requirements
The to-do list app should consist of two pages. A page that displays all to-do lists (ToDo Page) and a second page that displays all the tasks (Tasks List Page) in a to-do list. 

## ToDo Page
* The ToDo Page should be the landing page of the application.
* The ToDo Page should display all the created to-do lists. 
* Users should be able to create and delete each to-do list from this page. 
* If a list is completed it should use strikethrough formatting. 
* Each list should display how many items have not been completed.
* Each to-do list name should be unique
* Clicking on a to-do list name on the ToDo Page should take the user to the Task List page.

## Task List Page
* Users should be able to create, update and delete a task for the specific to-do. 
* Each task name should be unique
* Each task should contain a description, due date and priority (High, Medium or Low). 
* The submit button (for create and edit) on the task form should not be enabled until all fields are filled in.
* Each task should have the ability to be marked as complete.
* Each task that is not complete on the Tasks Page should be editable. 
* Each task should have an edit button that toggles that portion of the page from read-only to an editable form. 
  * The form should have a submit button that saves the changes and returns the task to the read-only view. It should also have a cancel button that returns the task to its read-only view.
Please feel free to get creative with the application if you would like to add additional features and capabilities beyond the requirements listed above.  

## Building and Running
Please provide instructions on how your application should be built and how the application can be run.  This will be used by the development team to review your application prior to our meeting.

## Submitting Application 
During this phase of the interview process a time will be scheduled for an in-person interview where you and the team will go through the application and review the code. The team would like to see how the solution has been implemented and ask questions about the approach; both technically and non-technically.
                                                                                                                                 
After completing the project, save your code to a public repository in Github. Notify either the recruiter you are working through or your contact here at Cohen that the application has been completed and pass along a link to your public repository. To prepare for that interview the team at Cohen must have the final version of the assignment 24 hours before the in-person, scheduled interview. If the code is not submitted in-time the interview will be postponed. If you have questions in the meantime please reach out

Good Luck!
Cohen Tech Team

*Image is not meant to define look and feel.  It’s merely here to attempt to provide clarity on the basic requirements.*

![assigment wire frame](../../blob/master/images/assignment-wire-frame.jpg?raw=true)

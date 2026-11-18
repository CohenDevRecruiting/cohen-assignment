# Development
## Running the Frontend Application
[VueJS].

Install dependencies

```npm i```

Start the application 

```npm run dev```

Go to *http://localhost:3000/todos* to verify the application is working. 


## Running the Frontend Application
[NodeJS].


Install dependencies

```npm i```

Start the application 

```nodemon```

API URL: *http://localhost:8000/*. 


# Assignment

For the next phase of the interview process, the team at Cohen would like you to build a web-based to-do list application.
 
The requirements below describe the core functionality, and we expect all of it to work. "Working" means that anyone who clones your repository and follows the instructions in your README can run the application and use all of the core functionality. With today's development tools, including generative AI, a complete, working implementation of these requirements is the starting point, not the finish line.
 
Beyond the core requirements, we'd like you to add at least one or two enhancements of your choosing. They don't need to be large. Pick something you think adds real value and do it well. Examples include additional functionality, an improved visual design, automated tests, validation and error handling, accessibility, deployment, or an improvement to the architecture. We care more about why you chose an enhancement and how well you built it than about how many you add.
 
You may use any SPA framework you prefer for the front end. We strongly prefer that the backend be developed using Node.js and Express, with the application's functionality exposed through a REST API. The API should include the resource endpoints needed to support the front end. You do not need to use a database or persistent data storage, though you're welcome to add one as an enhancement.
 
A simple, clean, usable interface is enough for the core requirements, and you're welcome to go further with the visual design as one of your enhancements. We're mainly interested in a working application and in how you approached the problem.
 
Generative AI tools are permitted and encouraged, and using them will not count against you. Be prepared to walk us through your code, explain your design and implementation decisions, and describe how you used AI along the way. You should understand everything you submit and be able to discuss it.
 
Please include a README that explains how to install and run the application, lists the enhancements you added and why you chose them, and notes any assumptions you made. If an enhancement has known limitations, note them there too.
 
Please plan on taking about 3 to 5 days to complete the assignment. There's no benefit to returning it early. We'd rather see a complete, well-considered solution than a fast one. When you're finished, send us a link to your Git repository and make sure we have access to it.

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
                                                                                                                                 
After completing the project, save your code to a public repository in Github. Notify either the recruiter you are working through or your contact here at Cohen that the application has been completed and pass along a link to your public repository. To prepare for that interview the team at Cohen must have the final version of the assignment 24 hours before the in-person, scheduled interview. If the code is not submitted in-time the interview will be postponed. If you have questions in the meantime please reach out.

Good Luck!
Cohen Tech Team

*Image is not meant to define look and feel.  It’s merely here to attempt to provide clarity on the basic requirements.*

![assigment wire frame](../../blob/master/images/assignment-wire-frame.jpg?raw=true)

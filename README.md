# CosentialDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Cosential Front End Coding Assessment

You are a software developer who has been contracted by an architecture firm called Sky High
Design, which works in the skyscraper industry. You have been given the task of creating a web
application that the firm’s employees can use to track their ongoing projects, client information, and
financials. The firm has not provided detailed mockups for the application, but does have a general idea
of the desired end result: The application should consist of a dashboard page, a page dedicated to
ongoing projects, a page detailing their clients, and a page containing the firm’s financial info. For the
purpose of this assessment, you will only need to complete the dashboard page and the ongoing
projects page.

The dashboard page should contain three items labeled “Ongoing Projects,” “Our Clients,” and
“Firm Finances.” Clicking on the “Ongoing Projects” item should navigate to the ongoing projects page.
The “Our Clients” and “Firm Finances” items should be present, but non-functional, and there should be
some UI element or styling to indicate to the user that they are currently disabled.
The ongoing projects page should display the firm’s ongoing projects. Each project has a name, a
client company name (i.e., which company the firm is working on the project for), an estimated
completion date, and the height of the skyscraper (in meters). The data regarding the firm’s ongoing
projects is in the attached JSON file.

For each project on the ongoing projects page, the project’s name should be displayed.
Additionally, the page should contain a select dropdown which allows the user to configure an
additional piece of project data to be displayed (either “Client Company,” “Completion Date,” or
“Height”). Hence, if the user has selected “Completion Date” in the dropdown, each project on the page
should display the project’s name and completion date (with the project’s client company and height
not displayed). Clicking on a project should open a modal which displays all the info about the project.

Technical requirements:

- The assessment solution should be implemented using Angular 8.
- You should follow Angular coding standards and best practices.
- You should use Angular CLI to build out the structure of your solution.
- You should use the Angular Router to enable navigation between the dashboard and
ongoing projects pages.
- You are encouraged, but not required, to use Angular Material UI components in your
solution.
- Although the ongoing project information is static and provided to you as an attached JSON
file, you should implement a service which returns the ongoing project information to the
relevant component, and the service should return the information asynchronously, as
though it were retrieving the information from an API. You should make use of RxJS in order
to achieve this.
- You should implement at least one unit test which tests some piece of functionality on the
ongoing projects page.
- The application should be user friendly and pleasing to the eye.
- You should submit your source code in a zip file. When unzipped, your application should be
runnable using “ng serve.”

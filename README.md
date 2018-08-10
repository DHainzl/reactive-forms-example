# ReactiveFormsExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Intention

The idea of this project is to provide some kind of best-practices on how to use reactive forms in Angular.

## What it does

This is a sample page of a web application which shows an edit screen of a specific superhero. It gets the data asynchronously from an endpoint (Mocked by `hero.service.ts`),
creates an reactive form out of the data received (`initForm` method in `app.component.ts`) and displays it to the user, while being split up into multiple
components (`hero-details` for name and appearences, `hero-powers` for the list of all powers and `hero-power` which allows to edit a single power.).

When clicking save, the form is checked if it is valid; If it is, it displayes the object which would be sent to the endpoint, if it is not it should highlight the inputs which have errors.

The validation style is updated when the user leaves an input field OR clicks save.

## Angular CLI help

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Nimet

This webapp has names.json saved in its data folder. It only has one module and data service. The data service GETs the contents of names.json using GetAllObjects() function. The results of this data service are used in app.component.ts where they are saved as nameObjectsList using ngOnInit() lifecycle hook. Now they can be used in the view part of the app, app.component.html, which displays the contents of names.json using certain simple controls: searching for a specific name, viewing amount of all people with these names and displaying all names in a table sorted by amount of names or alphabetical order. The layout of the page is done using Bootstrap styles. What I could improve still is making the search box cooler (displaying more alternatives for search results during the search).


## General

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

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

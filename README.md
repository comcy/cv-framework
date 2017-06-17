# CvFramework (Curriculum vitae framework)

## Setup for using the framework

For using the framework follow these instructions:

1) Import the framework Module into your `AppModule`

        ...
        import { FwModule } from 'fw/fw.module';
        ...

        @NgModule({
            declarations: [
            ...
            ],
            imports: [
               ...,
               FwModule
            ],
            providers: [
                ...
            ...


2) Place the `<fw-body>`-tag in any desired app related component
        
        ...
        {{ title }}
        <fw-body></fw-body>
        ...

3) Implement services for each api and add them as providers to the `AppModule`

        @NgModule({
            declarations: [
                ...
            ],
            ...
            providers: [
                HeaderConfigService,
                { provide: HeaderConfigApi, useExisting: HeaderConfigService },
                ...
            ]
            ...

    At least there must be one service setting up which content can be displayed and multiple services for setting up the content related data which will be shown.

## Project contents



## Setup for development 

This project was generated with the help of the angular cli. 

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

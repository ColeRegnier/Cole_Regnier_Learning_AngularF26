# Assignment 7 Angular 

## REST Countries API 
The docs are found at 
```
https://restcountries.com/docs
```
Example Request, you need your own api key.
```
https://api.restcountries.com/countries/v5?q=Canada&api-key=API-key-here
```
I chose to use httpResource because you said it was easier to use in class and I am cattle



the reason why the items get un deleted on refresh is because angular is reloading the api and refilling the countryList based on because everything is being reloaded.
Because the changes are stored locally they donot survive the reload. 
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.


Lazy Loading

main-YTTI5MVO.js    | main          | 342.38 kB |                91.13 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

Initial chunk files | Names          |  Raw size | Estimated transfer size
chunk-2ABCUGIZ.js   | -              | 199.09 kB |                58.49 kB
chunk-WG4LNMUC.js   | -              |  91.15 kB |                23.15 kB
main-QABG4HGL.js    | main           |   9.21 kB |                 2.76 kB
styles-5INURTSO.css | styles         |   0 bytes |                 0 bytes

                    | Initial total  | 299.44 kB |                84.41 kB

Lazy chunk files    | Names          |  Raw size | Estimated transfer size
chunk-56FAR77U.js   | country-form   |  43.92 kB |                 9.87 kB
chunk-FXPOSGQ2.js   | country-detail |   1.60 kB |               711 bytes

what changed was that we implemented lazy loading and in lazy loading the content in broken down into chunks that are loaded as needed not all at once with the exception of the main page .

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

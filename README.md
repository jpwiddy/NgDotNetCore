## Features

* [ASP.NET Core](http://www.dot.net/)
* [Entity Framework Core](https://docs.efproject.net/en/latest/)
* [Angular 2.4.3 Final](https://angular.io/) & [Typescript 2](http://www.typescriptlang.org/)
* [Webpack 2](https://webpack.github.io/)
* [Bootstrap 4](http://v4-alpha.getbootstrap.com/) (SASS) & [ng-bootstrap](https://ng-bootstrap.github.io/)
* Testing Angular 2 code with [Jasmine](http://jasmine.github.io/) and [Karma](https://karma-runner.github.io/0.13/index.html).
* End-to-end Angular 2 code using [Protractor](http://www.protractortest.org).
* [Istanbul](https://github.com/gotwarlost/istanbul) for test coverage
  * with [Remap Istanbul](https://github.com/SitePen/remap-istanbul) for remapping Javascript to TypeScript coverage
* Type manager with [Typings](https://github.com/typings/typings)
* [Typedoc](http://typedoc.io/) for typescript documentation
* [Serilog](https://serilog.net/) with [Seq](https://getseq.net/) support to manage structured logging.
* [Swagger](http://swagger.io/) as Api explorer (Visit url **http://localhost:5000/swagger/ui** after running the application)
  
* [Server](https://github.com/aspnet/dotnet-watch) and [client](https://webpack.github.io/docs/hot-module-replacement.html) watches
* [HMR](https://webpack.github.io/docs/hot-module-replacement.html) (Hot Module Replacement) with Webpack
* [Angular 2 dynamic forms](https://angular.io/docs/ts/latest/cookbook/dynamic-form.html) for reusability and to keep html code DRY.
* Webpack DLL support for fast rebuilds (~ < 0.5 second)
* Lazy loading of all routes, child routes
 
## Pre-requisites

1. [.Net core sdk](https://www.microsoft.com/net/core#windows)
2. Either [VSCode](https://code.visualstudio.com/) with [C#](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp) extension OR [Visual studio 2015 update 4](https://www.visualstudio.com/) with [.Net Core tooling](https://www.microsoft.com/net/core#windows)
3. [Nodejs](https://nodejs.org/en/)

**Make sure you have Node version >= 6.0 and NPM >= 3**

## Installation
```
1. Clone the repo
    git clone https://github.com/jpwiddy/NgDotNetCore

2. Change directory to our repo
    cd NgDotNetCore

3. dotnet restore

4. Install global dependencies
    npm install --global webpack typescript protractor rimraf 

5. npm install
    Note: On Windows machines (Visual Studio 15), there tends to be issues with the `node-sass` plugin
    if VS automagically installs your node dependencies for you. TLDR it'll be complaining about
    architecture not matching bindings. If this is the case, please do the following:
        > rm node_modules # or just delete then manually via file browser
        > npm install # manually install deps
        > npm rebuild node-sass

6. Create webpack vendor manifest file for fast webpack rebuilds
    For Development: 
        > npm run build:dev
    For Production: 
        > npm run build:prod 

8. Run the app:
    Note: To setup Development build with HMR, first run in dev console- 
        Windows:
            `set ASPNETCORE_ENVIRONMENT=Development`
        *nix/OSX:
            `export ASPNETCORE_ENVIRONMENT=Development`
    Two ways to run:
        1) `dotnet run` (for single run) OR `dotnet watch run` (in watch mode)
        2) Just F5 key if you are using VS code editor or Visual Studio IDE

9. Browse using http://localhost:5000 or http://localhost:5001 
```

## Other commands

### run Angular 2 tests
```bash
npm run test
# this will also create coverage remaped to typescript files in coverage folder after test run completes
```
### watch and run Angular 2 tests
```bash
npm run watch:test
```
### Typescript documentation
```bash
npm run docs
# this will create documentation in doc folder at the root location (open index.html file) 
```
### run end-to-end tests
```bash
# make sure you have your server running in another terminal (i.e run "dotnet run" command)
# AND make sure your webdrivers are updated
npm run e2e
```

### run webdriver (for end-to-end)
```bash
npm run webdriver:update
npm run webdriver:start
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run webdriver:start
# in another terminal
npm run e2e:live
```


# Another Webpack Starter Kit

##Description
This Webpack Start Kit is configured with the following:

* [webpack](https://webpack.github.io/)
* [ES6](https://en.wikipedia.org/wiki/ECMAScript)
* [React](https://facebook.github.io/react/)
* [Karma](http://karma-runner.github.io/)
* [Bootstrap v3](https://getbootstrap.com/)
* [jQuery](https://jquery.com/)
* [Less](http://lesscss.org/)

##Prerequisite

* [NPM](https://www.npmjs.com/) (NodeJS Package Manager) installed.
* Globally install webpack

    ```bash
    npm install -g webpack
    ```
    
* Globally install webpack-dev-server

    ```bash
    npm install -g webpack-dev-server
    ```    

* Globally install live-server

    ```bash
    npm install -g live-server
    ```
   

## Installation

Assuming you have the prerequisties software installed you simply run npm install that should install
all the dependencies indicated in the package.json file.

 ```bash
 npm install
 ```
## Build & Run Distribution 

webpack -p is ran, see package.json and final packaging including webpack chunking, minification is deployed under /dist

 ```bash
 npm run build
 ```

 To run the distribution
 
  ```bash
 npm run live
 ```
## Development and Live Load

For development, debugging and live loading

 ```bash
 npm run dev
 ```
 
 Basically runs **webpack-dev-server** with root set to ./build, where all your source files reside.
 
 ## Karma Test & Coverage Report
 
Dummy Test is configured, you need to of course add "real" tests.
 
When tests are ran coverage reports are created under **test-coverage**

Default test is headless using PhantomJS
 
 ```bash
 npm run test
 ```
 
Running test again Chrome

 ```bash
 npm run test:chrome
 ```
 
Running test again Firefox

 ```bash
 npm run test:firefox
 ```
 
## Lint Test
 
 ```bash
 npm run test:lint
 ```
 
## Clean Build ONLY
  
This simply runs **rm** command behind the scenes to remove the following folders:

* dist
* test-coverage

```bash
npm run clean:build
```

## Clean Everything

This removes the following folders:

* dist
* test-coverage
* node_modules

```bash
npm run clean:all
```

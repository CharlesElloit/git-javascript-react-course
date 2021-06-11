# Learn React

## Setting React application.

### Installing Nodejs.
 - Node is a Javascript runtime outside of a browser.
1. First thing you will need before starting setting up 
   your `React` project is Node, if you don't have node 
   installed head over to [nodejs.org](https://nodejs.org/en) and the download the LTS version which means `Long Term Support` and it's recommanded for most users.

   After you've successfully installed node, Node provides you with two command,

    - npm
    - npx

   npm stands for `Node Package Manager` which allow you to run scripts locally on your computer.
  
   npx stands for `Node Package Execute` it comes preinstalled with npm above version 5.2.0.
   npx is a npm package runner that can execute any package that you want from the npm registry without even installing that package on your computer first. 
   
### create-react-app
create-react-app is tool that allow to create 

### How to install create-react-app locally on your computer using npm.

```bash
$ npm i -g create-react-app
```
OR

```bash
$ npm install --global create-react-app
```

### After installing create-react-app, how to create a project with it.

```bash
$ create-react-app [name of the project]
```
OR
```bash
$ create-react-app .
```

### How to a React app using create-react-app with npx.

```bash
$ npx create-react-app [name of the project]
```
```bash
$ npx create-react-app .
```

## Folder Structure
```
├── my--react-app
|   ├── node_modules
|   ├── public
|   |   ├── index.html
|   |   ├── manifest.json
|   |   ├── etc.
|   ├── src
|   |   ├── App.css
|   |   ├── App.js
|   |   ├── App.test.js
|   |   ├── index.css
|   |   ├── index.js
|   |   ├── logo.svg
|   |   ├── reportWebVitals.js
|   |   ├── setupTests.js
|   ├── .gitignore
|   ├── package-lock.json
|   ├── package.json
└── └── README.md
```
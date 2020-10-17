# Navigation

* [Quick Start Guide](#php-rest-api-quick-start-guide-and-demo)
* [Change Log](#change-log-updates-for-2019-and-2020)
* [Authorship and Credits](#authorship-and-credits)
* [PHP Application Development Excercise: Detailed Overview](#php-application-development-excercise-overview)
* [Task Description](#php-application-development-excercise-task-description)

# Project Overview

This tutorial is Part 1 in a two-part tutorial series created for Facebook's 2020 Developer's challenge. 

Through the creation of a harvest inventory app for a family-owned organic farm called *Arroyo Family Farms*, the learner will master basic, intermediate as well as some advanced React development concepts.

This series and its resulting applications weere created by **Marcus "Arroyo" B.**  

## Part 1 Beginner's Tutorial - Arroyo Family Farms' Inventory App

Part 1 serves as a beginner's tutorial and guides the learner in creating a static, stateless, and non-interactive application using React functional components. 

To this end, Part 1 assumes the learner is marginally proficient in core JavaScript concepts and is using [VS Code](https://code.visualstudio.com/) as their editor. 

Additional emphasis is placed on understanding ESCM Script version 6 (ES6) Javascript concepts required to develop proficiency as a React development developer.  



# About React
React is a Javascript library created by Facebook. It is focused on User Interface (UI) rendering (i.e., the view component of the Model View Controller \[MVC\] design pattern). Raect uses a [JSX](https://www.google.com/search?what+is+JSX?) which allows the coder to combine HTML and JavaScript.  React was open-sourced to the developer community on [May 29, 2013](https://blog.risingstack.com/the-history-of-react-js-on-a-timeline#2013theyearofthebiglaunch).  

## Functional Components

## Updates to JavaScript from ES6

React uses Javascript ES6. ES6 brings new features (e.g., the support of classes) to JavaScript that are common in traditional objected oriented languages such as C, Java, and Python. For the purpose of this tutorial, we will focus on the newly added `const` and `let` keywords as well as support for arrow funtions `() =>`. React uses a [Babel](https://www.google.com/search?q=what+is+babel) to allow ES6 to be backward compatible with older browsers.



*[`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Description)* is a variable declaration like var, but it is "hyper-localized" and is limited to a given code block in which it is assigned.  Conclusion: let is preferred to `var` due its block-constrained localization which helps create more predictable code outcomes.

*[`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/const#Description)* is the constant declaration. It is also *hyper-localized* and is limited to a given code block in which it is assigned. Conclusion:  Functions can be assigned to constants and are often used in react for function declarations using arrow functions. In React, we typically don't write our constants in all-caps

### Arrow Functions: `() =>`

Arrow functions are a preferred subsitiute for 

```javascript
const OUTER = 10;
let number = 5;

function MyComponent (){
  const INNER = 5;
  return  OUTER * INNER;   //expect 5*10 = 50
}

MyOtherComponent = () => {
  let number = 3;
  number = number*OUTER; //expect 3*10 = 3-
  return number;  
}
```

Like let and const, arrow functions are "hyper-localized" and only exist in the scope where they were created. This is of particular interest to react developers because it negates the need to "manually" bind functions to a given class within its constructor. 




# Getting Started


## Setting-up a Local Development Enviorment for React

### VSCode Setup

1. Install [Babel Javascript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel).  Created by Michael McDermont, it provides VSCode syntax highlighting for JavaScript ES6, React JSX, Flow, and GraphQL.

2. Install Sergii Naumov's [Oceanic Theme](https://marketplace.visualstudio.com/items?itemName=naumovs.theme-oceanicnext). It supports a more granular level of syntax highlighting for nested properties.

### React Environment Setup

1. Install the LTS of version of [node.js](https://nodejs.org/en/). 

2. Using your terminal (i.e., CLI), navigate to the project folder where you will save the project.  

3. Within your terminal type `npx create-react-app  admin-panel`
   * Refer to the [official react tutorials](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to learn more about the `npx` and `create-react-app` directves  

4. Finally, type `npm start` to run the default react application




## The Directory Structure

*node_modules/:* standard node folder to store dependencies, packages (e.g., Babel) and libraries (e.g., React). 

*public/:* folder with global read privaleges (i.e., public , web accesible).  Only store public content here suhc as images and html files

*public/index.html:* Used by index.js to render the react app.  The app gets rendered to an arbitrary id's (default is 'root') DOM in this file  via this code `<div id="root"></div>`.

*index.css:* Global stylesheet. 
 
*index.js:*  Application entry point.  Renders App.js to an arbitrary id (default is id 'root') in public/index.html. Update to import App from './components/App' . 
 Here is the code in index.js that renders the App component into `<div id=root>` of index.html: 
```JSX
   ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
 ``` 

*App.js:* A container component and parent for react react applications.     Recreate and store in src/components. 
 


 


```text
my-awesome-app-name/
  ├──📁 node_modules/
  ├──📁 public/
  │ ├── index.html
  | |     ...
  | |── favicon.ico  
  | └── robots.txt
  ├──📁 src/
  │ ├── components/
  | | ├── App.js 
  │ | |── ComponentNum_1.js
  | | |     ...
  │ | └── ComponentNum_n.js
  | └──📁images/
  |
  ├── index.css
  ├── index.js
  ├── .gitignore
  ├── package.json
  └── README.md
```

## Thinking In React

A React application is composed of *modular peices of code* which compute and/or display a portion of application's UI. These modular pieces are called are encapsulated *components*.  Components should follow the single-use principle of SOLID Obect Oriented (OO) design.   If you are not familiar with SOLID principles, [Hash Bang Code](https://www.hashbangcode.com/article/solid-principles-php) has a excellent tutorial.

Within react there are two kinds of components: functional and class. This means that React applications may be either created using OO Classes or pure functions



You might find it helpful to famila

Each component represents a portion of our view.  Compoents 



https://reactjs.org/docs/thinking-in-react.html


### Wire Frame the App's Component Diagram

You may use a piece of paper or Diagrams

> how do you know what should be its own component? Use the same techniques for deciding if
> you should create a new function or object. One such technique is the single responsibility
> principle, that is, a component should ideally only do one thing. If it ends up growing, it
> should be decomposed into smaller subcomponents.
> *-- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy)*


> Separate your UI into components, where each component matches one piece of your data model.
> your UI (and therefore your component structure) should map
> - [Thinking in React](https://reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy)

### Arrange Components into a hierarchy



### Build Static Version of Site 

This principle also entails rendering the UI with static data. Facebooks's reasoning for this approach is bullet proof.  To summarize:

> ...building a static version requires a lot of typing and no thinking, and adding interactivity 
> requires a lot of thinking and not a lot of typing.
> - [Thinking in React](https://reactjs.org/docs/thinking-in-react.html#step-2-build-a-static-version-in-react)

> In simpler examples, it’s usually easier to code your component model top-down [parent to child],
> and on larger projects, it’s easier to go bottom-up and write tests as you build
> - [Thinking in React](https://reactjs.org/docs/thinking-in-react.html#step-2-build-a-static-version-in-react)



### Identify which components need to be state and convert them to Class Components

Figure out the absolute minimal representation of the state your application needs. [Then] compute everything else you need on-demand. 

or example, if you’re building a TODO list, keep an array of the TODO items around; don’t keep a separate state variable for the count. Instead, when you want to render the TODO count, take the length of the TODO items array.


# Building in React

## Components


## Functional Components


## Class Components

## Passing and Managing Variables

# Passing Down Callback Functions

```JSX

//Controller.js

//...setup code
class Main extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      masterList: [],
      selectedDetail: null
    }
  }

  onDetailSelect( id ) {
    this.setState({ selectedDetail: id});
  }

 render(){
    return (
      <div>

          <Master 
            masterList={this.state.masterList}
            onClick={(id)=>this.onDetailSelect(id)}
           />
          {/*<Detail selectedDetail={this.state.selectedDetail} /> this sends all elements of selected Detail array*/}


          <Detail selectedDetail={this.state.Detail.filter((detail) => detail.id === this.state.selectedDetail)[0]} /> 

                 
      </div>
    



## Props

## State

# Conclusion
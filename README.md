# Navigation

* [Quick Start Guide](#php-rest-api-quick-start-guide-and-demo)
* [Change Log](#change-log-updates-for-2019-and-2020)
* [Authorship and Credits](#authorship-and-credits)
* [PHP Application Development Excercise: Detailed Overview](#php-application-development-excercise-overview)
* [Task Description](#php-application-development-excercise-task-description)

# Project Overview

This is a beginner's React turtorial. It was created for Facebook's 2020 Developer's challege by Marcus (Marcos) B.  It takes the reader from "Zero-knowlege" of react to marginally proficient in core react development concepts.

The student is guided into the creation of master-detail interface.  This intereface may be adpated to create an online store + shopping cart, an addressbok, and a todo-list, etc. avariety of appications


# Getting Started

## Install

### node.js



## React Dev Tools

https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html

https://react-devtools-tutorial.now.sh/

## The Directory Structure

 Delete App.js (we will recreate), App.css, and logo.svg
 
 src/components/:  manually created to store all components including App.js. All app UI elemnest get their own component
 
 App.js: A container component and parent for react react applications.     Recreate and store in src/components. 
 
 index.js:  Application entry point.  Renders App.js to an arbitrary id (default is id 'root') in public/index.html. Update to import App from './components/App' . 
 Here is the code in index.js that renders the App component into `<div id=root>` of index.html: 
``` 
   ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
 ```

 public/index.html: Used by index.js to render the react app.  The app gets rendered to an arbitrary id's (default is 'root') DOM in this file  via this code `<div id="root"></div>`.

 
 index.css: Global stylesheet. 
 
 public/: folder with global read privaleges (i.e., public , web accesible).  Only store public content here suhc as images and html files
 
 node_modules: standard node folder to store dependencies, packages (e.g., Babel) and libraries (e.g., React). 


```
my-awesome-app-name/
  ├── node_modules/
  ├── public/
  │ ├── index.html
  | |     ...
  | |── favicon.ico  
  | └── robots.txt
  ├── src/
  │ ├── components/
  | | ├── App.js 
  │ | |── ComponentNum_1.js
  | | |     ...
  │ | └── ComponentNum_n.js
  | └── images/
  |
  ├── index.css
  ├── index.js
  ├── .gitignore
  ├── package.json
  └── README.md
```

## Thinking In React

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
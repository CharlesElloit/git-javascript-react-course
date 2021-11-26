# Introduction to Components in React.

In this topic, we will understand what React Components are, how to create<br> components and how to render them.

### What are React Components?

<br>
React Components are the building blocks of any React application. Components<br> allow us to split our UI into independent and resuable UI pieces.<br>

A typical React application will have many Components like header, navbar, main<br> content and a footer component. Conceptually a component is either a JavaScript class or<br> function which are refer to either stateful or stateless component, also known as logic or<br> presentational components that accepts inputs which are called properties or by convention known<br> as props and returns a React element that describes how a section of the User Interface should look like.<br>

In React and most other Javascript frameworks today, instead of writing a web<br> page as one long page of nested HTML elements, we define components that encapsulate blocks<br> of functionality and design. They can be as small or as large as you like, but, as with functions<br> in Javascript, well-organized code produces components that are relatively easy to read and<br> understand.

## Creating a Component

Let's see how class base component are defined.

## Stateless Class component Example

<br>

```js
import React, { Component } from "react";

class App extends Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}
```

Now let's see how functional base components are defined.

```js
Stateless functional component Example

ES5 - ES2015

function App() {
  return (
    <h1>Hello world!</h1>
  )
}

------ OR -----

ES6 - ES2016 ->

const App = () => <h1>Hello world!</h1>;

OR

const App = () => {
  return (
    <h1>Hello world!</h1>
  )
}
```

## Statefull Class components

<br>

```js
Statefull Class component

import React from 'react'

class SayHello extends React.Component {
  constructor() {
    super(props);
    this.state = {
      name: "Charles",
    };
  }

  render() {
    return (
      <h1>Hello, {this.state.name}</h1>
    )
  }
}
```

```js
Statefull Functional component using Hooks Example

function SayHello() {
  const [name, setName] = React.useState("Charles");

  return (
     <h1>Hello, { name }</h1>
  )
};
```

## What are the differences of stateless and stateful component?.

<br>
The difference is that one has state, and the other doesn’t. That means the stateful components<br> are keeping track of data changes in the application, while stateless components print out what is<br> given to them via properties, also known as props by convention, or they always render the same<br> thing in other words it's deterministics.

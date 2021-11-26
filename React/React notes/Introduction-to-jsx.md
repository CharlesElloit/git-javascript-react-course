# Introduction to JavaScript XML (JSX).

## What is JSX ?
JSX is an extension of JavaScript or XML-like syntax which allow us to create or build templete in our react<br> application.
JSX tags look exactly like HTML but is neither a string nor HTML elements.<br>You could say JSX is a templete language.

### Example of JSX in action.

```js
const element = <h1>Hello world!</h1>;
```
let see how it works in react component.
```js
function Hello() {
  return (
    <h1>Hello, world!</h1>
  )
}
```

## Embedding Expressions in JSX
<br>
To embed an expression in a JSX statement, you wrap that expression in curly braces.
<br>
<br>
Example.
<br>
<br>
Consider, that you have a variable called `name`, and you want to display the value of that<br> variable in a JSX statement.

```js
const name = "Charles";
const element = <h1>Hello, { name }</h1>;
```
let see how it works in react component
```js
function Hello() {
  const name = "Charles";

  return (
    <h1>Hello, { name } </h1>
  )
}
```
Note that you can pass any complex JavaScript expression, object or function within the<br> curly braces.

Example.
```js
const userInfo = {
  firstName: "Charles",
  lastName: "Elloit",
  age: 22,
}

// Helper function to format the user info

function formatUserInfo(userInfo) {
  return `${userInfo.firstName} ${userInfo.lastName}`;
}

// React component

function Hello() {
  return (
    <h1>
      Hello, am { formatUserInfo(userInfo) }, and am  {userInfo.age } years old.
    </h1>
  )
}
```
<br>

## Specifying Attributes within JSX.
<br>
In JSX attributes are specified exactly like the way you specified them in HTML tags but there<br> are slight differences that we going to talk about here.<br>
Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming<br> convention instead of HTML attribute names.

For example, class becomes className, tabindex becomes tabIndex, onclick becomes onClick<br> and so on.

<br>
Example of Attributes in JSX.

```js
const element = <h1 className="title">Hello, world!</h1>
const element2 = <div tabIndex="1"></div>

OR 

const title = "title";

const element = <h1 className={title}>Hello, world!</h1>

OR 

Dynamically you can also pass an expression.

const red = true;

const element = <h1 className={ red ? "red-style" : "blue-style" }>Hello, world</h1>;
```
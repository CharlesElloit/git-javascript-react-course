# Scope

Scope is an important concept that manages the availability of variables. The scope is at the base closures we will look into closures later but for now, it defines the idea of **global** and **local** variables.
If you'd like to code in JavaScript, understanding the scope of variables is a must. Let's dive into understanding Scope in-depth and how Scope works in JavaScript.

Before we dive into the different types and understanding of what the scope real is, let's try to examine and experiment, and go through demonstration of how the scope manifests itself.

Let's say you define a variable called name;

```js
const name = "David";
console.log(name); // David
```

Now let's say we move the declaration of the variable name inside of an if statement block;

```js
if (true) {
  const name = "David";
}

console.log(name); // RefernceError: name is not defined.
```

```
Important Note

Why does that happy?

The if statement block creates what we call a scope for the variable name and name variable can be accessed only within this scope.

At a higher level, the accessibility of a variable is limited by the scope where its created. You are free to access the variable defined within its scope. But outside of its scope, the variable is inaccessible.
```

<br>

## 1. Block Scope

In JavaScript, just like other languages a block of code defines a scope for a variable declared using let and const variable declaration key words.

Consider this example here similar to the above one.

```js
if (true) {
  const messgae = "Hello";
  console.log(message); // Hello
}

consol.log(message); /// RefernceError: message is not defined
```

```js
Important Note

The code block oof if, for, while statements also create a scope.
```

Let's look at one example for the other statements

```js
const assert = require("assert");

for (const color of ["green", "blue", "lightpurple", "red"]) {
  console.log(color); // green, blue, lightpurple, red
}

console.log(color); // RefernceError: color is not defined
```

<br>

## 1.1 var key word is not block scoped.

As we've seen in the previous section or in the above code snippet, the code block creates a scope for variables declared using const and let. However, that's not the case with variables declared using var key word.

let's see an example.

```js
if (true) {
  var name = "David";
}

console.log(name); // David
```

<br>

## 2. Function Scope.

In JavaScript, functions defines a scope for variables declared using var, let and const.

let's see an example.

```js
function scope() {
  var name = "David";
  console.log(name); // David
}

scope();
console.log(name); // throws ReferenceError name is not defined.
```

```
Important Note

scope function body creates a scope. The variable name is accessible inside of the function scope, but inaccessible outside.
```

Same way, a function body creates a scope for let, const and even function declarations.

let's see an example of that too.

```js
function scope() {
  var name = "David";
  var age = 23;

  function printInfo() {
    console.log("Inner function console: " + name); // Inner function console: David
  }

  console.log(name); // David
  console.log(age); // 23
  console.log(printInfo); // function
}

console.log(name); // throws ReferenceError
console.log(age); // throws ReferenceError
console.log(printInfo); // throws ReferenceError
```

<br>

## 3. Nested Scope

One of the interesting property of scopes is that they can be nested.

let's look at a quick example.

```js
function nestedScope() {
  const name = "David";

  if (true) {
    const friend = "Charles";
    console.log(friend); // Charles
    console.log(name); // David
  }

  console.log(friend); // throws ReferenceError
}

nestedScope();
```

<br>

## 4. Variables isolation

An immediate property of scope arises: the scope isolates the variables. And what's good, different scopes can have variables with the same name.

You can reuse common variables names (count, index, current, value, etc) in different scopes without collisions.

for example

```js
function isolatedVariables() {
  const index = 1;
  if (true) {
    const index = 2;
    console.log(index);
  }
  console.log(index);
}
```

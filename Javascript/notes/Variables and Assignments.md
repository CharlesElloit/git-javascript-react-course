# Variables and Assignments

## Their are three ways of declaring variables in variables in JavaScript:

<br>

1. var
1. let
1. const

  <br>

- ## **let**

  Variables declared with the key word let are mutable variables.
  meaning those variable values can change overtime.

  Example of let in action.

  ```js
  const assert = require("assert"); // Node is required

  let i;
  i = 0;
  i = i + 1;

  console.log(i);
  assert.equal(i, 1); // checking if the value is 1

  /* You can also declare a variable and assign a value to it
     to it directly.
  */

  let i = 0;
  ```

- ## **const**

  In contrast variables declared with the key word `const` are constants meaning immutable variables.
  Which means those variables values can not be change through out it's life cycle.

  ```txt
  Important Note

  All variables declared with the key word `const` must be initialize before hand.
  ```

  ```js
  const i = 0; // must be initialize to a value.

  assert((i = 3), "Assignment Error");
  ```

  Before ES6, there was also var. But it has several quirks, so it’s best to avoid it in modern JavaScript. But in case you are interested in knowing about it you can read about it here [http://speakingjs.com/es5/ch16.html](http://speakingjs.com/es5/ch16.html).

<br>
<br>

# Deciding between **const** and **let**

I recommend the following rules to decide between const and let:

- const indicates an immutable binding and that a variable never changes its value.
  Prefer it.
- let indicates that the value of a variable changes. Use it only when you can’t use
  const.

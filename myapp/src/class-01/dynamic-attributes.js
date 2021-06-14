/**
 * passing Dynamic attributes in JSX.
 */

import { person } from "./exports";

function Hello() {

  // Object destructuring
  const { first_name, last_name, age } = person;

  return (
    <h1 className={ age ? "green-style" : "red-style" }>
      Hello, { first_name } { last_name }
    </h1>
  )
};

export default Hello;

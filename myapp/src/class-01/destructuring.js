import { person } from "./exports";

function Hello() {

  // Object destructuring
  const { first_name, last_name } = person;

  return (
    <h1>
      Hello, { first_name } { last_name }
    </h1>
  )
};

export default Hello;
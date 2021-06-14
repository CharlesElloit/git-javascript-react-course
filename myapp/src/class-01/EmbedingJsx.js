/**
 * Embeding variables in JSX.
 */

import { name } from "./exports";

function Hello() {
  return (
    <h1>
      Hello, { name } 
    </h1>
  )
};

export default Hello;

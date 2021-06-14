// Default import
import david from "./export"

// Named import
import { person, time } from "./export"

// Name import and default import in the same line;
// import name, { person, time } from "./export"

function Hello() {
  return (
    <div>
      {david}
      <br></br>
      {time}
      <br></br>
      {person}
    </div>
  )
}

export default Hello;
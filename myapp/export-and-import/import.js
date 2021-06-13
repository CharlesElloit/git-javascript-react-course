import david, { person, time } from "./variable.js"

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
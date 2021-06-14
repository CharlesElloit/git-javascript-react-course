/**
 * Passing expression in JSX.
 */

function Hello() {
  const add = (x, y) => {
    return x + y
  }

  return (
    <h1>
      Answer is: { add(1, 4) }
    </h1>
  )
};

export default Hello;
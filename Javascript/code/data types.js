/* About dynamic typing. */
let foo = 42;
foo = "bar";
console.log(foo);

/* About BigInt */
const x = 2n ** 53n;
console.log(x);

/* Primitive types immutable */
let myName = "Charles"; //001
myName = "John";

let anotherPersonName = myName; //002
anotherPersonName = "Elloit";
console.log(myName);

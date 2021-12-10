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

console.log(anotherPersonName); // value of anotherPersonName is Elloit.
console.log(myName); // value of myName is John.

let name = "Charles";
name[0] = "D"; // can not change
console.log(name); // Charles

// None primitive data types

const Person = {
  name: "Charles",
  favouriteFood: "Taco",
  hobby: "Programming",
  gender: {
    male: true,
    female: false,
  },
};

// Does shallow copy.
let PersonLikeCharles = { ...Person };

// Manualing doing deepCopy
let PersonLikeCharles = { gender: { ...Person.gender } };

// Better way of doing deepCopy without thinking about manually
// deepCoping every single nested object.
let PersonLikeCharles = JSON.parse(JSON.stringify(Person));

PersonLikeCharles.hobby = "Gaming";
PersonLikeCharles.gender.male = false;
console.log("PersonLikeCharles gender: " + PersonLikeCharles.gender.male);

console.log("PersonLikeCharles hobby: ", PersonLikeCharles.hobby);
console.log("Person hobby: ", Person.hobby);
console.log("Person gender: ", Person.gender.male);

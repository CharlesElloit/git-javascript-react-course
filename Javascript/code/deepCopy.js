function deepCopy(object) {
  //TODO: check if the object array or object
  if (typeof object !== "object" || object === null) return object;
  //TODO: create a new object return
  let newObjectToReturn = Array.isArray(object) ? [] : {};
  // TODO: LOOP THROUGHT THE OBJECT
  for (let key in object) {
    const value = object[key];
    // TODO: RECURSIVE CALL
    newObjectToReturn[key] = deepCopy(value);
  }
  // TOOD: return the new object
  return newObjectToReturn;
}

const Person = {
  name: "Charles",
  favouriteFood: "Taco",
  hobby: "Programming",
  gender: {
    male: true,
    female: false,
  },
};

const copiedPerson = deepCopy(Person);

copiedPerson.gender.male = false;

console.log("Copied Person gender: " + copiedPerson.gender.male); // false
console.log("Original Person gender: " + Person.gender.male); // true

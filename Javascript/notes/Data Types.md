# Data Types

Programming languages all have built-in data structures, but these often differ from one language to another. we will attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

## Dynamic typing.

JavaScript is considered to be a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

Example

```js
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```

## JavaScript types.

<br>

### **Primitive type or Primitive avalues**

<br>

- **Boolean** <br>
  Boolean represents a logical entity and can have two values: true and false.

- **Null**<br>
  The Null type has exactly one value: null

- **Undefined**<br>
  A variable that has not been assigned a value has the value undefined.

- **Number**<br>

- **BigInt**<br>
  The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

  ```js
  Important Note

  A BigInt is created by appending n to the end of an integer or by calling the constructor.
  ```

  Example

  ```js
  const x = 2n ** 53n;
  console.log(x); // 9007199254740992n
  const y = x + 1n;
  conosle.log(y); // 9007199254740993n
  ```

  You can use the operators +, \*, -, \*\*, and % with BigInts—just like with Numbers. A BigInt is not strictly equal to a Number, but it is loosely so.

- **String**<br>
  JavaScript's String type is used to represent textual data.
  example my name "Charles"

- **Symbol**<br>
  A Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms".

  Example

  A Symbol value represents a unique identifier.

  ```
  Important Note

  Symbols are guaranteed to be unique.
  Even if we create many symbols with the same description,
  they are different values.
  ```

  ```js
  // Here are two symbols with the same description:
  let Sym1 = Symbol("Sym");
  let Sym2 = Symbol("Sym");

  assert.equal(Sym1, Sym2, "Symbols values are always different");
  console.log(Sym1 === Sym2); // returns "false"
  ```

  Examples of well-known symbols are: Symbol.iterator for array-like objects, or Symbol.search for string objects.

  To learn more about Symbol vist [https://2ality.com/2014/12/es6-symbols.html](https://2ality.com/2014/12/es6-symbols.html)

- **NaN**<br>
  Not a number

<br>
<br>

### **None Primitive Data type**

None preimitive types are every thing else except the primitive types

- **Objects**

  - This is the only none primitive in javascript.
    Everything else besides the primitive type is an object in JavaScript

    Which includes

    - Array
    - object
    - function
    - etc.

<br>
<br>

# Immutability

<br>

## **Primitives types**<br>

When a primitive data type is defined, it is given an address on the Call Stack, rather than the Memory Heap.

**Immutable**

A primitive data type cannot be changed after its creation, meaning that it is an immutable data type. If we assign a primitive data type a new value, the prior value’s address is still held in memory. The new value is given a different address.

Example

```js
let myName = "Charles"; // The value of myName is Charles
let anotherPersonName = myName; // also anotherPersonName value is Charles

anotherPersonName = "Elloit";
console.log(myName); // The values of myName reminds Charles.
```

```
Important Note

Here we are setting anotherPersonName equal to myName value. But when we reassign anotherPersonName with a different value, it does not effect the value of myName. This is what we would expect to happen! right. This is an example showing immutability. You will see later that this is not the case for non-primitive data types.

What's happening behind the scenes? let's relveal that and break it down.

1. myName is created and assigned an address in the call stack      with the value of "Charles".

2. anotherPersonName is assigned myName as its value, creating a completely new and separate address in the call stack.
3. anotherPersonName is reassigned with the value of "Elloit", which again makes a completely new and separate address in the call stack.

That's why the previous value of myName is not affected.
```

## What you should know about Immutable values.

- They have fixed size.

- Simple Data types.

- No motheds

<br>
<br>

## None Primitives types

<br>
A non-primitive data type is assigned an address as a value, which then creates a pointer to that address location in the memory heap.

<br>

```
Important Note

Here is where it gets more interesting.
let's understand what's happening.

The values are actually stored just once When
instantiated, and assigning a variable just creates a pointer
(reference) to that value.

```

<br>

**Mutable**

Non-primitive data types are mutable, which means when they are modified, the original copy is modified. Modifying these will not create a copy at a different address. Any direct modifications will effect the same address in the heap.

Example

```js
const Person = {
  name: "Charles",
  favouriteFood: "Taco",
  hobby: "Programming",
};

const PersonLikeCharles = Person;

PersonLikeCharles.hobby = "Gaming";

console.log("PersonLikeCharles hobby: " + PersonLikeCharles.hobby); // the value is Gaming.
console.log("Person hobby: " + Person.hobby); // the value is Gaming.
```

```
Important Note

So what happened? Why when we updated type of the PersonLikeCharles object, Person was effected? This example shows mutability! Let's take a look behind the scenes real quick.

1. Person is created in the call stack and is assigned an address.

2. The value of Person does not contain the object above, it contains another address pointing to a location in the memory heap where that data is store.

3. The location in the memory heap contains the value of the Person object.

PersonLikeCharles is assigned the value of Person. Since the value of Person only contains an address pointing to a location in the memory heap, PersonLikeCharles will also point to that same location in the memory heap.

4. Since these are both now pointing to the same location in the memory heap, any changes made to one will effect the other.
```

## Shallow Copy

<br>

In this example above, we have actually been doing what is called a shallow copy. meaning we are actually coping the reference itself
not the object data or values.
This is often times a problematic, since we expect the old variable to have the original values right, not the changed onces though.

<br>

```
Now the question is, how do we solve this problem?.
```

<br>

There are a couple of ways of solve this particular issue.

- Spread operator.
- Object.assign.

<br>

## Using Spread Operator

<br>

Example

```js
// Using the same above.

const Person = {
  name: "Charles",
  favouriteFood: "Taco",
  hobby: "Programming",
};

// Solving a shallow copy without nested object.
const PersonLikeCharles = { ...Person };

PersonLikeCharles.hobby = "Gaming";

console.log("PersonLikeCharles hobby: " + PersonLikeCharles.hobby); // the value is Gaming.
console.log("Person hobby: " + Person.hobby); // the value is Programming
```

<br>

## Using Object.assign

<br>
This was the only way we could merge objects together or copy objects before spread operator was around, and it basically does what spread operator is doing. but you have to careful, as the first argument of the function Object.assign() method actually gets the modified and returned. So make sure that you pass the correct object to copy at least as the second argument. But normally, you would pass an empty object as the first argument to avoid data modification of an existing data.

<br>

Example

```js
// Using the same above.

const Person = {
  name: "Charles",
  favouriteFood: "Taco",
  hobby: "Programming",
};

// Solving a shallow copy without nested object.
const PersonLikeCharles = Object.assign({}, Person);

PersonLikeCharles.hobby = "Gaming";

console.log("PersonLikeCharles hobby: " + PersonLikeCharles.hobby); // the value is Gaming.
console.log("Person hobby: " + Person.hobby); // the value is Programming
```

<br>

## Now there's another Pitfall with Nested Objects

<br>

As i mentioned above, there is one big problem when it comes to dealing with nested objects, which applies to both methods listed above.
So when it comes to nested object or arrays and you copy it, nested object or arrary inside that will not be copied, since they are also just only pointer or references.

Therefore, if you change the nested object, you will change it for both instance again which does serve purpose. simply meaning you would end up doing a shallow copy again.
<br>

Example

```js
// Using the same above.

const Person = {
  name: "Charles",
  favouriteFood: "Taco",
  hobby: "Programming",
  gender: {
    male: true,
    female: false,
  },
};

const PersonLikeCharles = { ...Person };

PersonLikeCharles.hobby = "Gaming";
PersonLikeCharles.gender.male = false;

console.log("PersonLikeCharles gender: " + PersonLikeCharles.gender.male); // false.
console.log("PersonLikeCharles hobby: " + PersonLikeCharles.hobby); //  Gaming.

console.log("Person gender: " + Person.gender.male); // false
console.log("Person hobby: " + Person.hobby); // Programming
```

<br>
  
## DeepCopy

<br>

There are a few ways to solve this problem as well which is called deep copy.

- Manually copying all the nested object.
- Using JSON.parse(JSON.stringify(yourObject)

<br>

## Manually copying all the nested object

<br>
Example

```js
// Using the same above.

const Person = {
  name: "Charles",
  favouriteFood: "Taco",
  hobby: "Programming",
  gender: {
    male: true,
    female: false,
  },
};

const PersonLikeCharles = { gender: { ...Person.gender } };

PersonLikeCharles.hobby = "Gaming";
PersonLikeCharles.gender.male = false;

console.log("PersonLikeCharles gender: " + PersonLikeCharles.gender.male); // false.
console.log("PersonLikeCharles hobby: " + PersonLikeCharles.hobby); //  Gaming.

console.log("Person gender: " + Person.gender.male); // true
console.log("Person hobby: " + Person.hobby); // Programming
```

<br>

## Using JSON.parse(JSON.stringify(yourObject)

<br>

```
Important Note

JSON.parse(JSON.stringify(your-object))

Does not work with stuff like: Dates, functions, undefined,infinity RegExps, Maps, Sets, Blobs, flielists,
ImageDates and other complex data types.
```

<br>
Example

```js
// Using the same above.

const Person = {
  name: "Charles",
  favouriteFood: "Taco",
  hobby: "Programming",
  gender: {
    male: true,
    female: false,
  },
};

// recurive transformation
const PersonLikeCharles = JSON.parse(JSON.stringify(Person));

PersonLikeCharles.hobby = "Gaming";
PersonLikeCharles.gender.male = false;

console.log("PersonLikeCharles gender: " + PersonLikeCharles.gender.male); // false.
console.log("PersonLikeCharles hobby: " + PersonLikeCharles.hobby); //  Gaming.

console.log("Person gender: " + Person.gender.male); // true
console.log("Person hobby: " + Person.hobby); // Programming
```

## So what's the other options out there.

- You could build your own deepCopy function.
- You can use libraries like immutable.js, immer.js, lodash, Ramda would do that for you.

<br>

## What you should know about mutable values.

- They have dynamic size.

- Complex Data Type.

- Motheds

- Built-in method

- Custom method

/*
  "Spread syntax allows an iterable such as an array expression or string 
  to be expanded in placeswhere zero or more arguments (for function calls)
  or elements (for array literals) are expected,
  or an object expression to be expanded in places where
  zero or more key-value pairs (for object literals) are expected". - Mozilla Developer Network
*/

// Object
const user = {
  name: 'John',
  age: 25
};

const user2 = {...user, id:5, name:'Jane'};

console.log(user);
console.log(user2);


// Array
// Alternative to concat()
const tab = [1,2,3];
const tab2 = [4,5,6];
// const t = tab.concat(tab2);
const t = [...tab, ...tab2]
console.log(t);

// Alternative to Function.prototype.apply
const sayHello = (x,y,z) => {
  console.log(`Hello ${x}, ${y}, ${z}`)
}

const names = ['CHIHEB', 'AMAN', 'AMIRA'];

sayHello.apply(null, names);

// With spread syntax way:
sayHello(...names);
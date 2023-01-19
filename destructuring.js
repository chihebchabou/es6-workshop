/*
  - "The destructuring assignment syntax is a
     JavaScript expression that makes it possible
     to extract data from arrays or objects into
     distinct variables" - Mozilla Developer Network
  - Destructuring syntax can be used on left-hand
    side of assignments
*/

// Array
const names = ["Chiheb", "amen", "Amira"];

// Using array index
// const chiheb = names[0];
// const amen = names[1];
// const amira = names[2];

// Using destructuring assignment
const [chiheb, amen, amira, john="JOHN"] = names
console.log(chiheb, amen, amira, john);

// Skipping Items in an Array
let [greeting,,,name] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"

// Object
const user = {
  name: 'John',
  age: 25, 
  profession : "web developer",
  address : {city: 'NY', building: 50, app: 24}
};

// Using dot notation
// const name = user.name;
// const age = user.age;
// const profession = user.profession;
// const city = user.address.city;
// const building = user.address.building;
// const app = user.address.app;

// Using destructuring assignment
const {name:n, age , profession: prof, address:{city:cty, building:bld, app}} = user;

console.log(`My name is ${n} and I'm ${age} years old, I'm a ${prof} and I live in ${cty}, building: ${bld} - app: ${app}`);

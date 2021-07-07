
/*
  - Template literals are string literals allowing embedded expressions.
  - You can use multi-line strings and string interpolation features with them.
*/

function greeting(name, age) {
  console.log('Hello, My name is ' + name + 'and I\'m ' + age);
  // With template literals
  console.log(`Hello, My name is ${name} 'and I'm ${age}`);
}

greeting('John', 45);

// multi-line strings
const fullName = 'John Doe';
const age = 45;
const profession = "web developer"

const str = `
User info:
  name: ${fullName}
  age: ${age}
  profession: ${profession}
`

console.log(str);
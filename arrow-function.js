// Function declaration
function add(x, y) {
  return x + y;
}

// Default function parameters
function add2(x, y=2) {
  return x + y;
}

// Arrow function
const add2 = (x, y) => {
  return x + y;
}

// Or we can simply write it this way if we only have one instruction
const add3 = (x, y) => x + y;

// We can get rid of parentheses if we only have on parameter
const greeting = name => `Hello ${name}`

// console.log(add(6, 5));
console.log(greeting('Amira'));
const names = ['Chiheb', 'Chrifa', 'Sondes', 'Sami'];

// for loop
for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
}

// for-of loop
for (const name of names) {
  console.log(name);
}

// Array.prototype.forEach
names.forEach((name, i) => console.log(name, i));

const numbers = [1, 2, 3, 4];

// Array.prototype.map
const result = numbers.map((number) => number ** 2);
console.log(result);

// Array.prototype.filter
const pairs = numbers.filter((number) => number % 2 === 0);
console.log(pairs);

// Array.prototype.reduce
const x = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(x); // output 10

const y = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  5
);
console.log(y); // output 15

// Array.prototype.find
const lengthGreaterThanTwo = numbers.find((number) => number > 2);
console.log(lengthGreaterThanTwo);

// Array.prototype.findIndex
const indexGreaterThanTwo = numbers.findIndex((number) => number > 2);
console.log(indexGreaterThanTwo);

// with if else

function test (num) {
  let number = num || 14
  // console.log(number);
  if (number <= 10) {
    return 'child';
  } else if (number < 18) {
    return 'teenager'
  } else {
    return 'adult';
  }
}

// With ternary operator

function test2 (num) {
  let number = num || 14
  return number <= 10 ? 'child' : number < 18 ? 'teenager' : 'adult';
}

console.log(test(19)); // output: adult
console.log(test2(19)); // output adult
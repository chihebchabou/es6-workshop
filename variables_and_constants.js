/*
 * Variables and Constants
 * 
 */

/*
 * Prior to the ES6, only 'var' keyword is used to declare variables.
 * variables declared with 'var' keyword are defined globally(outside any function), or locally(inside a function) without consideration of the block they are declared within.
 * Unlike 'var', if a variable declared with 'let' or 'const' within a block of code which is delimited with curly braces {}, it is only accessible to the code within this block.
 */

var x = 15
function myFunc1() {
  var x = 50;
  console.log('x inside function', x);
}

myFunc1()
console.log('x outside function', x);

/*
 * output:
 * x inside function 50
 * x outside function 15
 */

// --------------------------------------

function myFunc2() {
  var x = 50;
  if (true) {
    var x = 32
    console.log("x inside block", x);
  }
  console.log('x outside block', x);
}

myFunc2()
console.log('x outside function', x);

/*
  * output:
  * x inside block 32
  * x outside block 32
  * x outside function 15
  * ------
  * var x with value 50 is declared inside the function which makes the entire function become the scope of x
  * that's why x inside function has been changed from 50 to 32
*/


// ----------------------------------------------------
// 'const' and 'let' are introduced in ES6

let a = 1;
a = 2;

const b = 1;
b = 2; // output: TypeError: Assignment to constant variable.

const c; // SyntaxError: Missing initializer in const declaration

/*
 const variables are block scoped (much like let) but they cannot be reassigned.
 const variable must be assigned a value (initialized) when declared.
*/


function myFunc3() {
  let x = 50;
  if (true) {
    let x = 32
    console.log("x inside block", x);
  }
  console.log('x outside block', x);
}

myFunc3()
console.log('x outside function', x);

/*
 * output:
 * x inside block 32
 * x outside block 50
 * x outside function 15
 * ------
 * 
 * let variable is limited in scope to the block (if statement in this case) on which it is used, so it's not accessible from outside this block
 * x inside if block with value 32 does not affect the one declared with value 50
 */
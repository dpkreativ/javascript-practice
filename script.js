/**
 * - Primitive data types are immutable (non-modifiable)
 */
let stack = 'Prontend';

// console.log(stack[0]);

stack[0] = 'F'; // this won't work

stack = 'Frontend'; // do this instead

// console.log(stack);

/**
 * - Primitive data types are compared by their values
 */

let numOne = 3;
let numTwo = 3;

// console.log(numOne == numTwo);

let js = 'JavaScript';
let py = 'Python';

// console.log(js == py);

/**
 * - Non-primitive data types are mutable (modifiable)
 */

let nums = [1, 2, 3];

// console.log('Initial nums:', nums);

nums[0] = 13;

// console.log('Modified nums:', nums);

const frontendClass = [
  'Stella',
  'KM',
  'EB',
  'Law',
  'TRench',
  'Nuel',
  'Blessing',
  'Linian',
  'Mr Ikpe',
];

// console.log(frontendClass);

frontendClass[8] = 'Somto';

// console.log(frontendClass);

/**
 * - Non-primitive data types cannot be compared by their values
 */

let fruits = ['cucumber', 'tomato'];
let vegetables = ['tomato', 'cucumber'];

// console.log(fruits[0][0] === vegetables[1][0]);

// let sampleArray = [value1, value2, value3];

// let sampleObject = {
//   sk1: value1,
//   sk2: value2,
//   sk3: value3,
// };

// ===== NUMBERS =======
let age = 26;
const gravity = 9.81;
let mass = 83;
const PI = 3.14;

console.log('Data:', gravity, 'Data type:', typeof gravity);

// ==== Mathematical operations using JavaScript's Math Object ====
const pie = Math.PI;

// Weekend assignment
/**
 * Perform the following math operations using JavaScript's Math object ONLY
 * 1. Round `pie` to the nearest integer
 * 2. Round 9.81 down to 9
 * 3. Round 34.004 up to 35
 * 4. Return the max value among these numbers: (-5, 3, 20, 4, 5, 10)
 * 5. Create a random number between 1 and 10
 * 6. Find the square root of 169
 * 7. Find the value of 6 raised to power 3
 *
 * BONUS:
 * - Create and deploy a web page that generates a random Nigerian phone number in the +234 format.
 */

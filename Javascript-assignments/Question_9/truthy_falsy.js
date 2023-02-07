// 5 falsy values: 0, " ", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Truthy Values
console.log(Boolean("Rajat"));
console.log(Boolean({}));

// Money is a falsy value since its value is 0
const money = 0;
if (money) {
  console.log("Dont't spend it al");
} else {
  // Else part Executed due to falsy statement
  console.log("You should get a Job");
}

// undefined is a falsy value so the if block will not execute
let height; // height is undefined

if (height) {
  console.log("Will not Execute");
}

// Empty string is a falsy value so, the if block will not execute
if (" ") {
  console.log("Will not Execute");
}
// Truthy Values

if ("Rajat") {
  console.log("string is a truthy value"); // Truthy value will execute
}

const money1 = 100;
if (money1) {
  console.log("Don't spend it all"); // 100 is a truthy value. If block will execute
} else {
  console.log("You should get a Job");
}

// Logical AND && returns falsy value
const cat = 0;
const dog = 1;
if (dog && cat) {
  console.log("Dogs are human's best friend");
} else {
  console.log("Cat eat Fish");
}

//Logical OR || returns truthy value
const car = 0;
const bike = 1;
if (bike || car) {
  console.log("Ride Bike");
} else {
  console.log("Drive Car");
}

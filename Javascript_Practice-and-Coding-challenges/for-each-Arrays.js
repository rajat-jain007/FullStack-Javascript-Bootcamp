const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// using for of
console.log("--------FOR OF--------");
// for (const movement of movements) {
for (const [index, element] of movements.entries()) {
  if (element > 0) {
    console.log(`Movement ${index + 1}: You deposited ${element}`);
  } else {
    console.log(`Movement ${index + 1}: You Withdrew ${Math.abs(element)}`);
  }
}

// Using forEach
// forEach requires a callback function in each iteration - It is a Higher order function
// In forEach the order must be maintained (1st- array element, 2nd- index of the array, 3rd- Entire array)

console.log("-------FOREACH-------");
movements.forEach(function (elements, index, array) {
  if (elements > 0) {
    console.log(`Movement ${index + 1}: You deposited ${elements}`);
  } else {
    console.log(`Movement ${index + 1}: You Withdrew ${Math.abs(elements)}`);
  }
});
/* Note:- forEach() does not provide a way to terminate iteration
 before all elements have been passed to the function. That is, there is
no equivalent of the break statement*/

// This is how forEach is iterated as a loop using callback function
// 0: function(200);
// 1: function(450);
// 2: function(400);

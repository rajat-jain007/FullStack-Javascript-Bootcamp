/* The filter() method creates a new array like map() method or it creates a shallow copy of the array

 Note:- Like other callback function i.e forEach and map it holds the same three parameters - function(element, index, array) */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposites = movements.filter(function (element, index, array) {
  return element > 0;
});
console.log(movements);

console.log(deposites);

// Using for for of Loop
const depositFor = [];
for (const element of movements) {
  // Pushing the filtered element in an empty array i.e depositFor=[]
  if (element > 0) depositFor.push(element);
}
console.log(depositFor);

// Another example of Filter method using arrow function
const withdrawal = movements.filter((element) => element < 0);
console.log(withdrawal);

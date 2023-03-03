/* Map method is another way to loop over arrays

Note:- Unlike forEach, Map method will give you brand new Array and this new array will contain the result of callback function in each position to the original array 
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Using Map Method
const eurToUds = 1.1;

/* Store it in variable since it will return brand new Array*/
const toUsd = movements.map(function (element) {
  return element * eurToUds;
});
console.log(movements);
console.log(toUsd);

// Testing Using For of Loop
/* To push the result of the movement array, create an empty array*/
const toUsdForof = [];
for (element of movements) {
  toUsdForof.push(element * eurToUds);
}
console.log(toUsdForof);

// Note:- Map method has access to three pararmeters like forEach (element,index, array)

const movementDescription = movements.map(function (element, index) {
  return `Movements ${
    index + 1
  }: You ${element > 0 ? "Deposited" : "Withdrew"} ${Math.abs(element)}`;
});
console.log(movementDescription);

const rest = new Map();
rest.set("name", "Classic");
rest.set(1, "France");
console.log(rest.set(2, "Lisbon"));

rest
  .set("categories", ["Pasta", "Pizza", "Pizza", "Risotto", "pasta"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are Open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));

console.log(rest.get(1));

const time = 24;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// You can create a Map by passing an Array to the new Map() constructor:
const question = new Map([
  ["question", "What is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again"],
]);
console.log(question);
// Quiz App
console.log(question.get("question"));
// key, value is used to make new Map iterable(which is an Object here)
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt("Your Answer is "));
const answer = 3;
console.log(answer);
console.log(question.get(question.get("correct") === answer));

// Convert Map to array using Spread Method

const newArr = [...question];
console.log(newArr);
//console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

/*
Some of the difference between map() and forEach() methods are listed below −

1) The map() method returns a new array, whereas the forEach() method does not return a new array.

2) The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.

3) The map() method can be used with other array methods, such as the filter() method, whereas the forEach() method cannot be used with other array methods. 
*/

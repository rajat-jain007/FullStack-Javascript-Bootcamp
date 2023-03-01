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

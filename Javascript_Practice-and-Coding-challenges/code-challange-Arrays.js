/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog
🐶 number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
")
4. Run the function for both test datasets
Test data:
* Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
* Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
*/

// Solution 1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function () {
  console.log("--------Julia's Data-------");
  dogsJulia.forEach(function (element, index) {
    const checkAge =
      element >= 3
        ? `Dog Number ${index + 1} is an Adult and is ${element} years Old`
        : `Dog Number ${index + 1} age ${element} is still a Puppy`;
    console.log(checkAge);
  });
  console.log("--------Kate's Data-------");
  dogsKate.forEach(function (element, index) {
    const checkAge =
      element >= 3
        ? `Dog Number ${index + 1} is an Adult and is ${element} years Old`
        : `Dog Number ${index + 1} age ${element} is still a Puppy`;
    console.log(checkAge);
  });
};

checkDogs();

//  Solution 2
// Shallow copy of the array "dogsJulia" using spread operator
const copyJulia = [...dogsJulia];
console.log(copyJulia);

// Removing the first and the last two elements of the array using slice() method
const removeJuliasData = copyJulia.slice(1, -2);
console.log(removeJuliasData);

//  Solution 3
// Updated Data of Julia after slice
console.log("------Updated Data Of Julia ----------");
const updatedJuliaData = removeJuliasData;
console.log(updatedJuliaData);

// Kate's updated data
console.log("------Updated Data Of Kate's ----------");
console.log(dogsKate);

// Solution 4
// Final data of Julia's and Kate's

const finalData = function () {
  console.log("--------Final data of Julia's------");
  updatedJuliaData.forEach(function (element, index, array) {
    const checkAge =
      element >= 3
        ? `Dog Number ${index + 1} is an Adult and is ${element} years Old`
        : `Dog Number ${index + 1} age ${element} is still a Puppy`;
    console.log(checkAge);
  });
  console.log("--------Final data of Kate's-------");
  dogsKate.forEach(function (element, index, array) {
    const checkAge =
      element >= 3
        ? `Dog Number ${index + 1} is an Adult and is ${element} years Old`
        : `Dog Number ${index + 1} age ${element} is still a Puppy`;
    console.log(checkAge);
  });
};
finalData();


// Another Optimised Solution
console.log("-------Another Optimised Solution-------");
const checkDogs2 = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, index) {
    if (dog >= 3) {
      console.log(
        `Dog number is ${index + 1} is an adult, and is ${dog} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy `);
    }
  });
};
checkDogs2([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs2([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

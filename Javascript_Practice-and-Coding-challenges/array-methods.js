// SLICE method doesn't change the original array

let arr = ["a", "b", "c", "d", "e"];
// Index will start reading from Index 2
console.log(arr.slice(2)); // ['c', 'd', 'e']

// Last element is not included due to index 4 written in arr.slice method
console.log(arr.slice(2, 4)); // ['c', 'd']
// Negative value will count elements from last Indexes
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
// Starts counting at index 1 and removes the last 2 elemets
console.log(arr.slice(1, -2)); // ['b', 'c']
// Returns the entire array without changing the array
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']

// SPLICE method change the original array

console.log(arr.splice(3)); // ['d', 'e']

// changes the orignal array(elements removed)
console.log(arr); // ['a', 'b', 'c']

// REVERSE change the original array
const arr2 = ["g", "h", "i", "j", "k"];
console.log(arr2.reverse()); // ['k', 'j', 'i', 'h', 'g']
console.log(arr2);

// CONCAT method does not change the original array
const firstName = ["James", "bond"];
const lastName = [" Rajat", "Jain"];
const concat = firstName.concat(lastName);
console.log(concat); // ['James', 'bond', ' Rajat', 'Jain']

// JOIN
console.log(concat.join(" - "));

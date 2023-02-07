// console.log(Date.prototype.getFullYear);
// console.log(getFullYear());

const date = new Date();
const year = date.getFullYear();
console.log(year);

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month1 = month[date.getMonth()];
console.log(month1);

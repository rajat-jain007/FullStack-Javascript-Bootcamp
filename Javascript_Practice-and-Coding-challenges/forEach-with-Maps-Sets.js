const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

/* Map with forEach
In map index is Key on the left side
(i.e=> 'USD', 'EUR', 'GBP')in this case
*/
currencies.forEach(function (element, index, array) {
  console.log(`${index}: ${element}`);
});

// Set
// Note:- A set doesn't have index
const uniqueCurrencies = new Set(["USD", "EUR", "GBP", "EUR", "USD"]);
console.log(uniqueCurrencies);

// Set with forEach
uniqueCurrencies.forEach(function (element, _, array) {
  console.log(`${element}: ${element}`);
});
// USD: USD
// EUR: EUR
// GBP: GB

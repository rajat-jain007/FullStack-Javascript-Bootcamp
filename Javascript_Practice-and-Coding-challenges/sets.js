const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "pasta"]);

console.log(orderSet);

console.log(new Set("Rajat"));

console.log(orderSet.size);
console.log(orderSet.has("Pasta"));
console.log(orderSet.has("bread"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ["waiter", "chef", "waiter", "Manager", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);

console.log(new Set('Rajat').size);

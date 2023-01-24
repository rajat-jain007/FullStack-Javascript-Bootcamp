const word = "Rajat";
const bool = true;
const undef = undefined;
let undef1;
const isNull = null;
console.log(
  typeof word,
  typeof bool,
  typeof undef,
  typeof undef1,
  typeof isNull
);

// Returning Null
function test(x = 1) {
  console.log(x);
}
test(null);

// Returning dafault Value When passed undefined
function testUndefined(x = 1) {
  console.log(x);
}
testUndefined(undefined);

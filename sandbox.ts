const charater = "hihihi";
console.log(charater);
const inputs = document.querySelectorAll("input");

console.log(inputs);

inputs.forEach((input) => {
  console.log(input);
});


// Type Basics
let stringDemo = "hi";
let numberDemo = 10;
let booleanDemo = true;

stringDemo = 'hello';

const circ = (diameter: number) => {
  return diameter * Math.PI;
}
console.log(circ(7));
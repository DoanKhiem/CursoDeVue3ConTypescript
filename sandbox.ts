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


// Arrays

let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// name.push(3); // error
// names[0] = 'peach'; // error

let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun'); // error
// numbers[1] = 'hi'; // error

let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// Objects

let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'; // error
// ninja.skills = ['fighting', 'sneaking']; // error

ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 40,
  // skills: [] // error
};

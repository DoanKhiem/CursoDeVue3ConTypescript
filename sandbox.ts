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


// Explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi'; // error
age = 30;

// isLoggedIn = 12; // error
isLoggedIn = true;

// Arrays
let ninjas: string[] = [];

// ninjas = [0, 1, 2]; // error
ninjas = ['yoshi', 'mario'];
ninjas.push('ryu');

// Union types
let mixedArr: (string|number)[] = [];
mixedArr.push('hello');
mixedArr.push(20);
// mixedArr.push(false); // error

let uid: string|number;
uid = '123';
uid = 123;
// uid = false; // error

// Objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black', /* skills: [] */ }; // error

// Any type
let ageAny: any;
ageAny = true;
console.log(ageAny);
ageAny = 'hello';
console.log(ageAny);
ageAny = { name: 'ken' };
console.log(ageAny);


let mixedAny: any[] = [];
mixedAny.push(5);
mixedAny.push('mario');
mixedAny.push(false);
console.log(mixedAny);

let ninjaAny: { name: any, age: any };
ninjaAny = { name: 'yoshi', age: 25 };
console.log(ninjaAny);

ninjaAny = { name: 25, age: 'yoshi' };
console.log(ninjaAny);

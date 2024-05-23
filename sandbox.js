var charater = "hihihi";
console.log(charater);
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
// Type Basics
var stringDemo = "hi";
var numberDemo = 10;
var booleanDemo = true;
stringDemo = 'hello';
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7));
// Arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// name.push(3); // error
// names[0] = 'peach'; // error
var numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun'); // error
// numbers[1] = 'hi'; // error
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// Objects
var ninja = {
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
var character;
var age;
var isLoggedIn;
// age = 'luigi'; // error
age = 30;
// isLoggedIn = 12; // error
isLoggedIn = true;
// Arrays
var ninjas = [];
// ninjas = [0, 1, 2]; // error
ninjas = ['yoshi', 'mario'];
ninjas.push('ryu');
// Union types
var mixedArr = [];
mixedArr.push('hello');
mixedArr.push(20);
// mixedArr.push(false); // error
var uid;
uid = '123';
uid = 123;
// uid = false; // error
// Objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black', /* skills: [] */ }; // error

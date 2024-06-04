var age = 30;
var firstName = 'John';
var isFictional = true;
// age = 'hello' // Error: Type 'string' is not assignable to type 'number'.
age = 25; // OK
firstName = 'Jane'; // OK
isFictional = false; // OK
var planet = 'Earth'; // Type is inferred as string
var moons = 1; // Type is inferred as number
var isLarge = false; // Type is inferred as boolean
planet = 'Mars';
moons = 145;
isLarge = true;
// null & undefined
var something;
var anotherThing;
something = null;
anotherThing = undefined;

let age: number = 30;
let firstName: string = 'John';
let isFictional: boolean = true;

// age = 'hello' // Error: Type 'string' is not assignable to type 'number'.
age = 25; // OK
firstName = 'Jane'; // OK
isFictional = false; // OK

let planet = 'Earth'; // Type is inferred as string
let moons = 1; // Type is inferred as number
let isLarge = false; // Type is inferred as boolean


planet = 'Mars'
moons = 145
isLarge = true

// null & undefined
let something: null
let anotherThing: undefined

something = null
anotherThing = undefined


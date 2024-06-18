// function first() {
//   console.log('first....')
//   second();
// }

// function second() {
//   console.log('second....')
//   third();
// }

// function third() {
//   console.log('third....')
// }

// first();

// var x = 100;
// var y = 50;

// console.log(getSum(x, y));

// function getSum(n1, n2) {
//   return n1 + n2;
// }

// var sum1 = getSum(x, y);
// var sum2 = getSum(10, 20);


// setTimeout(() => {
//   console.log('Hello World');
// }, 2000);

// console.log('Running...')

let name = "Đoàn Khiêm";

let age = 20;

let person = {
    name: "Đoàn Khương",
    age: 40,
}

let newName = name;

newName = "Đoàn Khoa";

let newPerson = person;

newPerson.name = "Đoàn Xuân Khoa";
console.log(newPerson);
console.log(name);
const anchor = document.querySelector('a');

// if (anchor) {
//   console.log(anchor.href);
// }

console.log(anchor?.href);

import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// invOne.client = 'yoshi'; //error
invTwo.amount = 400;

console.log(invOne, invTwo);


console.log(invoices);

invoices.forEach(inv => {
  // inv.client = 'something'; //error
  console.log(inv.client, inv.amount, inv.format()); //inv.details is private error
});


// const form = document.querySelector('form')!;

const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
});

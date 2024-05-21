// 3. Name Cases:
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
// and titlecase

const person_name: string = "Syed Konain Nasir";

console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());

let firstLetter: string = person_name.charAt(0).toUpperCase();
let restLetters: string = person_name.slice(1).toLowerCase();

let titlecase = firstLetter+restLetters;

console.log(titlecase);
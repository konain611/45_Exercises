// You don’t have to limit the number of tests you create to 10. If you want to try more
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal
// to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in an array
// • Test whether an item is not in an array

let my_name = "Konain";
console.log(my_name == "Konain");
console.log(my_name !== "Konain");

let my_number = 7;
console.log(my_number == 7);
console.log(my_number !== 7);
console.log(my_number > 4);
console.log(my_number < 2);
console.log(my_number >= 7);
console.log(my_number <= 3);

let num1 = 10;
let num2 = 20;
console.log(num1 <= 10 && num2 >= 15);
console.log(num1 <= 10 && num2 >= 25);
console.log(num1 <= 10 || num2 >= 30);
console.log(num1 <= 7 || num2 >= 21);

let my_Array = ["Konain" , 5 , "xyz" , 4];
let my_String = "Konain";

console.log(Array.isArray(my_Array));
console.log(Array.isArray(my_String));
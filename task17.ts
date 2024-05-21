// You just found out that your new dinner table won’t arrive in time for the dinner, and you have
// space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you
// pop a name from your list, print a message to that person letting them know you’re sorry you can’t
// invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you
// actually have an empty list at the end of your program

const guests: string[] = ["Mr.Kamran Tessori" , "Sir Daniyal Nagori" , "Sir Zia Khan" ,"Sir Ail"];
console.log("due to the unavailability of table, Only two members are Allowed\n");

let Sir1 = guests.pop();
console.log(`Sorry sir ${Sir1}, You are not invited`);
let Sir2 = guests.pop();
console.log(`Sorry sir ${Sir2}, You are not invited\n`);

for(let i=0; i<guests.length; i++){
    console.log(`Asalam o Alaikum ${guests[i]}, You're still invited on a Dinner`);
}
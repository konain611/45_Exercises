// You just found a bigger dinner table, so now more space is available. Think of three more guests
// to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing
// people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list

console.log("Members attending the Dinner");
const guests: string[] = ["Mr.Kamran Tessori" , "Sir Daniyal Nagori" , "Sir Zia Khan" ,"Sir Ail"];
console.log(guests);

console.log("We have to invite three more Friends\n");

guests.unshift("Sir Sameer");
guests.splice(2 , 0, "Sir Hamza Khan");
guests.push("Mr Imran Khan");

for(let i=0; i<guests.length; i++){
    console.log(`Asalam o Alaikum ${guests[i]}, You're invited on a Dinner`);
}
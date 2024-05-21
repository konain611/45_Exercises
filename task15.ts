// You just heard that one of your guests can’t make the dinner, so you need to send out a new
// set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating
// the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person
// you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.


const guests: string[] = ["Mr.Kamran Tessori" , "Sir Daniyal Nagori" , "Sir Zia Khan" ,"Sir Ail"];

console.log(`\nDue to some reason, ${guests[3]} will not ne attending my dinner`);
guests[3] = "Sir Sameer";

console.log("\n\tNew List of Guests attending dinner");

for(let i = 0; i< guests.length; i++){
    console.log(`\n ${guests[i]}.`);
}
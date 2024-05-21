// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
// includes at least three people you’d like to invite to dinner. Then use your list to print a message to
// each person, inviting them to dinner.

const guests: string[] = ["Mr.Kamran Tessori" , "Sir Daniyal Nagori" , "Sir Zia Khan"];

for(let i = 0; i< guests.length; i++){
    console.log(`\nAsalam o Alaikum ${guests[i]}, i'm inviting you on a dinner.`);
}
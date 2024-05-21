// Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userName: String[] = ["Hamza" , "Ali" , "Daniyal" , "Admin" , "Konain" , "Owais" , "Tabish"];

//Removing all members
userName = [];
console.log(userName);

if(userName.length > 0){
    for(let i = 0; i <= userName.length; i++){

        if(userName[i] == "Admin"){
            console.log(`Hello ${userName[i]}, would you like to see a status report?`);
        }
        else{
            console.log(`Hello ${userName[i]}, thank you for logging in again.`);
        }
    }   
    
}
else{
    console.log("We need to find some Users...");
    
}
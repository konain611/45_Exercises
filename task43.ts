// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicianNames = ["Hamza" , "Daniyal" , "Ali" , "Owais"];

//making copy
let magicianNamesCopy = [...magicianNames]

function show_magicians(greet: String){
    
    let withGreetings = "";

    for(let item of magicianNamesCopy){
        withGreetings += `${greet} ${item} \n`        
    }
    return  withGreetings;
}

let myGreetings = show_magicians("Heyya,");
let myArray = myGreetings.split(`\n`);

console.log(
    myArray
);


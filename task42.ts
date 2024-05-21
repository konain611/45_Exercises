// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magicianNames = ["Hamza" , "Daniyal" , "Ali" , "Owais"];

function show_magicians(greet: String){
    for(let item of magicianNames){
        console.log(greet ,  item);
        
    }

}
show_magicians("Hey,");
show_magicians("Hey, How are you");
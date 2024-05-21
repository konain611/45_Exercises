// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicianNames = ["Hamza" , "Daniyal" , "Ali" , "Owais"];

function show_magicians(){
    for(let item of magicianNames){
        console.log(item);
        
    }

}

show_magicians(); // function calling
show_magicians(); // calling function multiple times
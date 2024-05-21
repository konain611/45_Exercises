// Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let myPizzas = ["Fajita Pizza" , "Malai Boti Pizza" , "Cheesy lava Pizza"];

// print names only
for (let i = 0; i < myPizzas.length; i++){
    console.log(myPizzas[i]);
    
}

// printing sentance
for (let i = 0; i < myPizzas.length; i++){
    console.log(`i would like to eat ${myPizzas[i]}`);
    
}
console.log(`\n I really like pizza. they are soo mouth watering and enriched in flavours. we can also modify them by
using toppings we like. `);

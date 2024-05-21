// Make an array of your favorite fruits, and then write a series of independent if statements that
// check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
// is in your array, the if block should print a statement,
// such as You really like bananas!


let fav_Fruits = ["Apple" , "Orange" , "Watermelon" , "Grapes"];

if(fav_Fruits.includes("Mango")){
    console.log("I would love to eat Mangoes")
}
else if(fav_Fruits.includes("Pineapple")){
    console.log("I would love to eat Pineapple")
}
else if(fav_Fruits.includes("Orange")){
    console.log("I would love to eat Orange")
}
else if(fav_Fruits.includes("Banana")){
    console.log("I would love to eat Bananas")
}
else{
    console.log("No Fruits available :(")
}
// Think of at least five places in the world you’d like to visit.
// • Store the locations in an array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been
// changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its
// order has changed.

let my_places: string[] = ["Norway" , "Finland" , "Japan" , "Canada" , "Qatar" , "Australia"];
console.log(my_places);

// making copy of array and sorting in alphabetical order
let copyofarray = my_places.slice();
let sortedArray = copyofarray.sort();
console.log(sortedArray);

//confirming original array
console.log(my_places);

//Reversing the array in Alphabetical order
let copyofarray0 = my_places.slice();
let sortedArray1 = copyofarray0.sort();
let ReverseArrayAlphabetically = copyofarray0.reverse();
console.log(ReverseArrayAlphabetically);

//confirming original array
console.log(my_places);

//reversing Array
let reverseArray = my_places.reverse();
console.log(reverseArray);

//reversing Array Again
let reverseArray1 = reverseArray.reverse();
console.log(reverseArray1);

//sorting oriinal Array
let sortOriginalArray = my_places.sort();
console.log(sortOriginalArray);

//Reversing Sorted Array
let ReverseSortedArray = sortOriginalArray.reverse();
console.log(ReverseSortedArray);
// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


// making large default
function make_shirt(label: string , size: string = "Large"){
    return `My shirt size is ${size} and print ${label} on it`
}

console.log(make_shirt("I Love TypeScript"));


// making medium default
function make_shirt2(label: string , size: string = "Medium"){
    return `My shirt size is ${size} and print ${label} on it`
}

console.log(make_shirt2("I Love TypeScript"));


// making any size
function make_shirt3(label: string , size: string = "Any size"){
    return `My shirt size is ${size} and print ${label} on it`
}

console.log(make_shirt3("LEARN & EARN"));

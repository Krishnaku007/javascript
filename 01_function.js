

function saymyName(){
    console.log("K");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("n");
    console.log("a");
}

// saymyName()

// function addTwonumber(number1,number2/*parameters*/) {
//     console.log(number1+number2);
// }

function addTwonumber(number1,number2/*parameters*/) {
    //  let result=number1+number2
    //  console.log("Kkr");
    // return result
    return number1+number2
}

const result=addTwonumber(3,7/*Arguments*/) 
//  
// console.log(result);

function loginUserMessage(username="Krishna") {
    if (/*username===undefined*/!username  ) {
        // console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Krishna"));
// console.log(loginUserMessage("rohan"));


function calculateCartPrice( val1, val2, ...num1){   /*...rest operator*/

return num1
}

calculateCartPrice(2)

console.log(calculateCartPrice(200, 300, 400));

const user={
    username:"Krishna",
    price:300
}

function handleObject(anyObject){
    console.log(`The user name is${anyObject.username} and the price will be${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username:"Krishna",
    price:400
})


const myNewArray=[400, 300, 100, 600]
function returnSecondVaue(getArray)
{
    return getArray[1]
}
console.log(returnSecondVaue(myNewArray));

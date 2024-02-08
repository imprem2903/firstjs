function newfunction() {
    console.log("Prem");
    console.log("Are you there ?");
    console.log("Yes, Hello computer");
}

newfunction(); //name of the function = reference & name() is execution

function twoNumbers(number1, number2){
    const result = number1 + number2
    return result

    // OR

    return number1 + number2 

}

//agar ham koi bhi value return kar rahe hai tab hi ham use koi variable me store kar skate hai, otherwise nahi kar sakte 

const result = twoNumbers(1,6) 

console.log("Result:", result );

function loginUserMessage(username){
    if(username == undefined){   //username == undefined can also be written as !username
        console.log("Please enter a username");
    }
    else{
        return `${username} just logged in`
    }
}

console.log(loginUserMessage("Prem"));
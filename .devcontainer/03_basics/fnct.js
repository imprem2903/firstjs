function newfunction() {
    console.log("Prem");
    console.log("Are you there ?");
    console.log("Yes, Hello computer");
}

newfunction(); //name of the function = reference & name() is execution

function twoNumbers(number1, number2){
    return number1 + number2 

    // OR

 //  the below argument will not execute as we have already returned the result above... return ke baad kuch bhi print nahi hota 

     const result = number1 + number2
     return result
}

//agar ham koi bhi value return kar rahe hai tab hi ham use koi variable me store kar skate hai, otherwise nahi kar sakte 

const result = twoNumbers(1,6) 

console.log("Result:", result , "Thala for a reason");

function loginUserMessage(username = "human"){
    if(username == undefined){  
         //username == undefined can also be written as !username
        console.log("Please enter a username");
    }
    else{
        return `${username} just logged in`
    }
}

console.log(loginUserMessage("Prem"));
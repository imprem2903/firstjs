switch (key) {
    case value:
        break;       //Basic Syntax of a switch case statement
    default:
        break;
// }

/************************************* */
const month = 8

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    default:
        console.log(Date());
        break;
}


// ***********Truthy OR Falsyyyy***********

//falsy values
/* 
    false, 0, -0, BigInt 0n,""(empty string),null,NaN,undefined
*/

//Truthy Values 
/*  STRING KE ANDAR KAHANI BADAL JATI HAI   
    "0", "false", " " (Ek space) ,[],{}, function(){}
*/

// Nullish Coalescing Operator (??): null undefined
        // It returns the right hand side operand if the left value is nullish / falsy

    let val1;
    val1 = 5 ?? 10 //output 5
    val1 = null ?? 10 // 10
    val1 = null ?? undefined //undefined
    val1 = null ?? NaN //NaN
    val1 = null ?? 10 ?? 21  //10
    val1 = null ?? 21 ?? 10  //21 
    // (Jo pehli value milegi wahi assign hojaegi usko)
    // console.log(val1); 

    //Coalescing Operator and Ternary operator are different 
// Ternary Operator (?)

const price = 100
price <=80 ? console.log("less then 80") : console.log("More then 80");

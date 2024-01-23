
// Data Types of Js 
// Primitive (Call by Values) / Reference type :
//      String, Number, Boolean, Null,  Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.2
const isLoggedIn = false   
let userEmail;

const id = Symbol('123')
const anotheID = Symbol('123')
console.log(id === anotheID)


     

// Non Primitive (Reference Type ) :
//     Array, Objects, Functions

const drugs = ["Mdma", "Cocaine"];
{
  name: "Prem malhotra";
  age: 20;
}

const myFunction = 
function(){
    console.log("Hello World!")
}
console.log(drugs)
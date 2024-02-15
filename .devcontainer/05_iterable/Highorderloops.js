// // Array Specific loops
// //for of , for each , for in...

// for (const iterator of object) {} //for of loop Syntax

// for (const key in object) {} //for in loop Syntax 

// array.forEach(element => {}); //for each loop Syntax


// //**************For Of Loop**********************
// //***************************************** */

// const arr = [1,23,4,5,6,65]

// for (const num of arr) {
//     // console.log(num);
// }

// const greetings = "Hello World"

// for (const greet of greetings) {
//     if (greet === " ") {
//         continue;
//     }
//     console.log(`${greet}`);
// }

// // *********************************
// /* **********Maps in For of**************** */
// used for unique , remains in order

//  const map = new Map()
//  map.set("IN", "INDIA")
//  map.set("AS", "AUSTRIA")
//  map.set("SA", "SOUTH AFRICA")

// for (const [key, value] of map) {
//     console.log(`${key} represents ${value}`);
// }

// const myObj = {
//     "game1": "NFS",
//     "game2": "PUBG"
// }
//         *****we cannot use for of loop for objects*****
// for (const key of myObj) {
//     console.log(key);
// }

// /* ********* For In loop ************** */

// const Objet = {
//     js: "Javascript",
//     cpp: "C++",
//     rb: "ruby",
//     go  : "GO by Google"
// }

//         //objects ke lie we can use for in everytime

// for (const key in Objet) {
//     console.log(`${key} : ${Objet[key]}`);
//         // console.log(`${} represents ${}`);
// }

// const Arrey = ["js","cpp","c","C#"]

// for (const key in Arrey) {
//     console.log(Arrey[key]);
// }


// //******FOR EACH LOOP ******** */
// /***************************** */

// const languages = ["java", "javascript", "python", "c", "c++"]

// languages.forEach(function (element){
//     console.log(element);
// })

// languages.forEach( (element) => {
//     console.log(element);
// } )

// function printme(element){
//     console.log(element);
// }
// languages.forEach(printme) //reference dena hai

// languages.forEach( (Element, index , arr )=>{
//     console.log(Element, index, arr);
// })

// const coding = [
//     {
//         lang: "js",
//         langfile: ".js"
//     },
//     {
//         lang: "py",
//         langfile: ".py"
//     },
//     {
//         lang: "c",
//         langfile: ".c"
//     },
// ]

// coding.forEach( (item)=>{
//     console.log(item.lang);
// })
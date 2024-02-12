/* Immediately Invoked Function Expressions (IIFE) 
Jaise hi function likha waise hi execute Karwana hai  */

/* Need of IIFE : 
Global Scope se pollute na hojae (x variable ki value nahi le)
Application jaise hi start ho waise hi koi x kaam start ho jae ;
*/

//IFFE likhne ke lie function ko `()` se cover karte hai 

(function random(){                 //named IFFE
    console.log("DB Connected");
})(); 
             //2 IFFE use karne ke lie `;` lagta hai 

( (name) => {                     //unnamed/simple IFFE
    console.log(`DB Connected 2 ${name} `);
} )("Prem Malhotra")


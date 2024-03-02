// const thisNum = [1,2,3,4,5,6,7,8,9]

// const newnum = thisNum
//     .map((num)=> num+10)
//     .map((num)=> num*10)
//     .filter((num)=> num>150)
// console.log(newnum);


//*****Reduce*************/

// const thisNum = [1,2,3,4,5,6,7,8,9]

// const initialVal = 0
// const sum = thisNum.reduce((acc,startl)=>{
//     return acc + startl
//     initialVal
// })

// console.log(sum);

// const thisNum = [1,2,3]
// const sum = thisNum.reduce( function(acc,currVal){
//     console.log(`Acc: ${acc} , Current Value : ${currVal}`);
//     return acc + currVal
// },0 )

// console.log(sum);

// const shoppingCart = [
//     {
//         CourseName : "Learn Js",
//         Price : 1000
//     },
//     {
//         CourseName : "Learn Pytho",
//         Price : 31000
//     },
//     {
//         CourseName : "Learn CyberSecurity",
//         Price : 10000
//     }
// ]

// const Subtotal = shoppingCart.reduce((acc,total) => {
//     console.log(`Acc:${acc} , Total: ${total.Price }`);
//     return acc + total.Price
// },0)
// console.log(Subtotal);
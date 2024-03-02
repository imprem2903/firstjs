// Loop ke andar loop

// for (let i = 1; i <= 10; i++) {
//     console.log("Our number is ", i);
//    for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//    }    
// }

// for (const char of "Hello World") {
//     if (char == " ") {
//     continue
// }
//     console.log(char);
// }


// Iterating over a Set
// const Iter = new Set([1,1,2,3,2,3,4,5,6])

// for (const element of Iter) {
//     console.log(element);
// }

// const map1 = new Map()
// map1.set("a", 1),
// map1.set("b", 2),
// map1.set("c",3);

// console.log(map1.entries());
// map1.delete("a");


// const myobj = {
//     'game1':"NFS",
//     'game2':"Spiderman"
// }

// for (const key in myobj) {
//     console.log(key);   
// }

// const obj = {
//     'a':1,
//     'b':2
// }

// for (const key in obj) {
//     console.log(`${key} : ${obj[key]}`);
    
// }

// const langs = ["c","c++","c#","rb","python"]

// langs.forEach( (element) => {
//     console.log(element);
// })

// function printme(item){
//     console.log(item);
// }

// langs.forEach(printme)

// langs.forEach((item, index, arr)=> {
//     console.log(item,index);
// })


// const num = [1,2,3,4,5,6,7,8,9,10]

// const newNum = num.filter((element) => element > 4)
// console.log(newNum);

// const books = [
//     {
//         Title: "1", genre: "History", publish:1990
//     },
//     {
//         Title: "2", genre: "Fiction", publish:1994
//     },
//     {
//         Title: "3", genre: "Non Fiction", publish:1997
//     },
//     {
//         Title: "4", genre: "History", publish:1980
//     },
//     {
//         Title: "5", genre: "Fiction", publish:1999
//     },
//     {
//         Title: "6", genre: "Non-Fiction", publish:1993
//     },

// ]

// let userBooks = books.filter((bk)=>{
//     return bk.publish >= 1995 && bk.genre === "Fiction"
// })
// console.log(userBooks);
    

// const num = [1,2,3,4,5,6,7,8,9,10]

// // const newNum = num.map((n)=>{    return n + 10})

// const newNum = num
//             .map((n)=> n * 10)
//             .map((n)=> n + 10)
//             .filter((n)=> n <50)
            
// console.log(newNum);

// const myNum = [1,2,3,4,5]
// const myTotal = myNum.reduce((acc,curval)=>{
//     console.log(`${acc} + ${curval}`);
//     return acc + curval
// }, 0)

// console.log(myTotal);

// const cart = [
//     {
//         courseName : "Learn Python",
//         price : 1999
//     },
//     {
//         courseName : "Learn Dsa",
//         price : 4999
//     }, 
//     {
//         courseName : "Git Learn",
//         price : 599
//     },
// ]

// const Total = cart.reduce((acc,item) => {
//     console.log(`${acc} + ${item.price}`);
//     return acc + item.price

// }, 0 )
// console.log(Total);
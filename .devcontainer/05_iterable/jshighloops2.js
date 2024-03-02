// const languages = ["java", "javascript", "python", "c", "c++"]

// const values = languages.forEach( (element)=> {
//     console.log(element);
//     return element
// })  
  //for each koi bhi value return nahi karta        
// console.log(`this is values : ${values}`);

// const numBer = [1,2,3,4,5,6,7,8,9,10] 

// let newNum = numBer.filter((num) => {
//    return num > 4
// })
// console.log(newNum);

/****************************************************************/

const books = [
    {
        Title: "1", genre: "History", publish:1990
    },
    {
        Title: "2", genre: "Fiction", publish:1994
    },
    {
        Title: "3", genre: "Non Fiction", publish:1997
    },
    {
        Title: "4", genre: "History", publish:1980
    },
    {
        Title: "5", genre: "Fiction", publish:1999
    },
    {
        Title: "6", genre: "Non-Fiction", publish:1993
    },

]

// let newBook = books.filter((bks)=>{
//      return bks.publish > 1995 && bks.genre === "Fiction"
// })
// console.log(newBook);


let newBook = books.filter((bks)=>{
    return bks.publish > 1995 && bks.genre === "Fiction"
})
console.log(newBook);

// const thisSymbol = Symbol("symbol")

// const obj = {
//     name: "Prem malhotra",
//     [thisSymbol]: "lmao this a Symbol"
// }

// console.log(obj);

// const person = {
//     isHuman:{},
//     introduction : function(){
//         console.log(`My name is ${this.name} . Am I a human? ${this.isHuman}`);
//     }
// }

// const me = Object.create(person);
// me.name = "Prem Malhotra";
// me.isHuman = "Yes you are." 

// me.introduction();

const tinderUser = new Object()
tinderUser.id = 1241
tinderUser.name = "Prem"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const Sym = Symbol("Key1");


 const userInfo = {
    id : "124abx",
    [Sym] : "Unique Symbol",
    Details : {
        firstName : "Prem",
        lastName : "Malhotra"
    }
 }
//  console.log(userInfo.Details);


const obj1 = {1:"a",2:"b"} //target 
const obj2 = {3:"c", 4:"d"} //source
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3);

const users = [
    {
        id:1, email :"prem@mail"
    },
    {
        id:2, email :"p@mail"
    }, {
        id:3, email :"pem@mail"
    }, {
        id:4, email :"pr@mail"
    }, {
        id:5, email :"pm@mail"
    },
]

users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// console.log(Object.fromEntries(tinderUser));


console.log(tinderUser.hasOwnProperty("isLoggedIn"));
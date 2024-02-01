const mySymbol = Symbol("key1")

const obj = {
    name: "Prem Malhotra",
    age: 20,
    location: "Sonipat",
    email:"pm@gmail.com",
    [mySymbol]: "mykey1",
}

// console.log(obj["name"]);

obj.greetings = function(){
    console.log("Hello , this is a function");
}

// console.log(obj.greetings())

// String Interpolation: (``)iske through ham koi bhi variable likh sakte hai using ${}

obj.greeting2 = function(){
    console.log(`Hello ${this.name} this is a function`);  
}
console.log(obj.greetings());
console.log(obj.greeting2());
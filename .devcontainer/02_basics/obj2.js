// const thisSymbol = Symbol("symbol")

// const obj = {
//     name: "Prem malhotra",
//     [thisSymbol]: "lmao this a Symbol"
// }

// console.log(obj);

const person = {
    isHuman:{},
    introduction : function(){
        console.log(`My name is ${this.name} . Am I a human? ${this.isHuman}`);
    }
}

const me = Object.create(person);
me.name = "Prem Malhotra";
me.isHuman = "Yes you are." 

me.introduction();

const user = {
    username: "Prem malhotra",
    price: 999, 
    welcomemessage : function(){
        console.log(` ${this.username}, welcome to our website`);
        console.log(this);

        return this.welcomemessage
    }
}

user.welcomemessage()
user.username = "Sam"
user.welcomemessage()

//// We cannot use `this` keyword for functions ////

const chai = function(){
    let username = "Prem Malhotra"
    console.log(this.username);
} 


//*********** Arrow Functions in JS ************** */

const chai = () => {
    let username = "Prem malhotra"
    console.log(this);
}

const addTwo = (num1,num2) =>{
    return num1 + num2
}
console.log(addTwo(100,322));

// arrow function can also be used as  (Implicit Return)

const addTwo = (num1 , num2) => (num1 + num2) 

const addTwo = (num1 , num2) => ({username: "Prem Malhotra"})

 /*object me return karne ke lie we have to wrap it with parenthesis `()` */

/*return keyword likhne ki jarurat nahi hoti isme `{}` agar use kia to return keyword use hoga otherwise not */

    console.log(addTwo(2,4));
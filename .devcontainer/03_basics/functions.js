function fun(number){
    
    return number*  number
}

console.log(fun(44));


function myinfo(name, Country){
    return `My name is ${name}. I am a citizen of ${Country}`
}

console.log(myinfo("Prem Malhotra", "India"));

function random(f,a){
    const result = new Array(a.length);
    for (let i = 0 ; i<a.length;i++){
        result[i] = f(a[i]);        
    }
    return result;
}

const cube = function(x){
    return x*x*x;
};

const number = [1,2,3,4,5]

console.log(random(cube,number));



function CalCartPrice(... number){
    return number;
}

console.log(CalCartPrice(12,42,411));

const user = {
    username: "Prem",
    price: 1000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}

handleObject(user)

const newArray = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[2];
}

console.log(returnSecondValue(newArray));
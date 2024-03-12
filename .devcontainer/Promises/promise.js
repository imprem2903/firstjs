const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    }, 1000)
})

//.then() is directly related to resolve

promiseOne.then(function(){
    console.log("Promise is met");
})

//there is no need to store promise in a variable

new Promise(function(resolve, reject){
    setTimeout(function(){
       console.log("Async Task 2");
       resolve()
    }, 2000 )
},).then(function(){
    console.log("Async 2 resolved");
})

// ******************************************

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "Prem", email: "malhotra@gmail"})
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({username: "Prem Malhotra", password: 123})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function() {
                let error = true
                if (!error) {
                    resolve({language: "JavaScript", password: 123})
                }else{
                    reject('ERROR: Something went wrong')
                }
            }, 1000)
})

async function consumePromiseFive(){
  try {
    const response =  await promiseFive 
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()

async function getAllUsers(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data);
    
  } catch (error) {
    console.log("E:", error);
  }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
  return response.json
}).then((response)=>{
  console.log(response);
})

.catch((error)=>{
  console.log(error);
})
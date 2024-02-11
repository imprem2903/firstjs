function one (){
    const username = "Prem"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()


if (true){
    const username = "Prem Malhotra"
    if (username === "Prem Malhotra"){
        const website = "Youtube"
        // console.log(username + website);
    }
    // console.log(website);
    // console.log(username);

}

function addone(num){
    return num + 1          //Ye basic Function hai 
}
console.log(addone(2))
              
                                //ye dono methods hai functions banane ke
const addTwo = function(num){
    return num + 2                  //ye expression hai 
}
console.log (addTwo(5))
// const myArr = ["a","b","c","d","e","f","g","h"]

// myArr.push("f", "g")
// // myArr.pop()
// myArr.unshift()
// myArr.shift()
// const newArr = myArr.join()

// console.log(myArr);
// console.log("A", myArr);
// const newArr = myArr.slice(1,3)
// console.log("B", newArr);
// const nayArr = myArr.splice(0,4)
// console.log("C", nayArr);


// const marvelHeros = ["Thor", "Iron Man", "Spiderman"]
// const dcHeros = ["Batman","Superman","Flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);

// marvelHeros.concat(dcHeros)
// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// const allnewHeros = [...marvelHeros, ...dcHeros]
// console.log(allnewHeros);

// const new = [1,2,3]

// const vegetables = ["Broccoli", "Corn","Mushrooms","Capsicum"]
// const fruits = ["Apple", "Mango", "banana"]
// const vegan = vegetables.concat(fruits);

// console.log(`${vegan.indexOf("Apple")}`);

// const new = ["snippet"]

const arrLike = {
    length: 3,
    0: [1,2],
    1: {length: 2,0:3,1:4},
    2:5,
    3:3,
};

console.log(Array.prototype.flat.call(arrLike));


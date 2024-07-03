//array

const myArr=[0,1,2,3]
const myHeros=["Shaktiman", "Superman"]
const myArr2= new Array(1,2,3,4)
// console.log(myArr[0]);
// console.log(myArr2[3]);
// console.log(myHeros[1].length);

//Array methods

// myArr.push(7)
// myArr.push(5)
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr= myArr.join() //convert into string
// console.log(  newArr);


// console.log(myArr);

//slice, splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);
const myn2= myArr.splice(1,2)
console.log(myn2);
console.log("c",myArr);


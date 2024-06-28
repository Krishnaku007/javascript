const name= "Krishna"
const reopoCount=50
// console.log(name+reopoCount);

console.log(` hello my name is ${name} and my repo count is ${ reopoCount}`); /// String INterpolation

const gameName= new String('Krishna-kumar')
// console.log(gameName);
// console.log(gameName[4]);

// // console.log(gameName.__proto__);
// console.log(name.toUpperCase());

// console.log(gameName.charAt(3));

const newString=gameName.substring(1, 5)
console.log(newString);

const anotherString= gameName.slice(1, 5)
console.log(anotherString);

const newStringOne="   krishna   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://krishna.com/Krishna%20kumar"
console.log(url.replace('%20','-'));

console.log(url.includes('KrisHna'));

console.log(gameName.split('-'));
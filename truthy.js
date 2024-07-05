//falsy values
// false, 0, -0, BigInt On, "", null, undefined, NaN

//truthy values
//"0", 'false'," ", [], {}, function(){}//empty function.

// const userEmail=[]
// if(userEmail){
//     console.log("userEmail is truthy");
// }
// else{
//     console.log("userEmail is falsy");
// }

// if (userEmail.length===0) {
//     console.log("Array is empty");
// }

// const emptyObject={}

// if (Object.keys(emptyObject).length===0) {
//     console.log("Object is empty");
// }
// Nullish Coalescing Operator(??): null undefined

// let val1;
// // val1=5??10
// // val1=null??10
// /// val1=undefined??15
// val1= null??10??20

// console.log(val1);

// ternary operator
//  condition?true:false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

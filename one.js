//for loop 
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is the best number");
//     }
//     console.log(element);
    
// }

for (let i = 1; i <=10; i++) {
    // console.log(`outer loop:${i}`);
    for (let j = 1; j <=10; j++) {
        
        // console.log(`i = ${i} and j = ${j}`)

        // console.log(i+'*'+j+'='+i*j);
        
    }
    
}

// let myArray=["Flash", "Batman", "Superman"]

// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

 for (let i = 0; i <=10; i++) {
    if(i==5){
        console.log("detected 5");
        // break
        continue
    }
    console.log(`Value of i is ${i}`);
    
 }
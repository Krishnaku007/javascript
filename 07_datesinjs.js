let myDate= new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// let myCreateDate=new Date(2024,1,23)
// let myCreateDate=new Date(2023,0,15,12,4)
// let myCreateDate=new Date("2023-01-20")
let myCreateDate=new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString());

let myTimestamp= Date.now()
// console.log(myTimestamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMinutes());

newDate.toLocaleString('default',{
    weekday:"long",
    
})


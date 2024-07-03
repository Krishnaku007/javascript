//singleton

//objects literals
const mySym =Symbol("Key1")

const Jsuser={
    name: "Krishna",
    "Full name": "Krishna kumar",
    [mySym]:"myKey1",
    age: 20,
    location:"Patna",
    email:"Krishna@gmail.com",
    IsLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["Full name"]);
// console.log(Jsuser[mySym]);

// Jsuser.email="Krishnakumar@gmail.com"
// // Object.freeze(Jsuser)
// Jsuser.email="Krishnakumar@gpt.com"

// console.log(Jsuser);

Jsuser.greetings=function(){
    console.log("Hello World");
}
Jsuser.greetings2=function() {
    console.log(`Hello js user, ${this.name}`);
}
console.log(Jsuser.greetings());
console.log(Jsuser.greetings2());
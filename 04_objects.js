// const tinderUser=new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Krishna"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"Krishna@gmail.com",
    fullname:{
        userFullname:{
            firstname:"Krishna",
            lastName:"Kumar"

        }
    }

}

// console.log(regularUser.fullname.userFullname.firstname);

// const obj1={1:"a",2:"b"}
// const obj2={a:"A",b:"B"}
// const obj3={a:"A",b:"B",c:"C"}

// const obj4= Object.assign({},obj1,obj2,obj3)
// const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);

// user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


 const course = {
    courseName:"Js in hindi",
    courseDuration:"3 months",
    courseInstructor:"hitesh"

   
 }

 const {courseInstructor: name}= course

 console.log(name);

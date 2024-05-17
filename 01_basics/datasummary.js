//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

 const score = 100
 const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

 const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// Stack - primitive datatype  
  
let person1 = "Vikas"
  
let person2 = "person1"  //it will show the person1 value but when we change in person2 value and console person1 value it 
                        //will show original value "vikas" beacause inside stack they made a copy for person2 value.

person2 = "Vishal"

console.log(person1);
console.log(person2);

// heap - non-primitive/reference datatype

let user1 = {
    email: "kuku@gooogle.com",
    Upi : "kukuybl"
}                           //it will show the user1 value but when we change in user2 value and console person1 value it 
                           //will show original value that value we changed in user2 beacause inside heap they take value from reference.

let user2 = user1

user2.email = "kunu@google.com"

console.log(user1);
console.log(user2);

    
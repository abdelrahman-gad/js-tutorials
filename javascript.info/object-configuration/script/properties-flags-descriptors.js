/*
Each property in the flag contains value and three more flags

ex=>

const  Obj = {
    name:"abdurrahman"
     
}
name propery contain value "abdurrahman"
and three more flags
writable , enumurable , configurable
*/   
const user = { 
    name:"abdurrahman",
    age:25
}
// lets make age propery to be not enumurable
// How to get flags of object property ?

const flags = Object.getOwnPropertyDescriptor(user , "age"); // return decriptot object
//descriptor  is an object that contains flags of specific property
console.log(flags);

// How to set flags of object property ?
// you can name the object that contians the t
// Object.defineProperty(object, property , descriptor object );


Object.defineProperty( user , "age" ,{
    enumerable:false,
    configurable:false
});
user.age=30;
delete user.age;
console.log(user);

//  Writable = accept to change value of property
// configurable = accept to delete property


// const newFlags = Object.getOwnPropertyDescriptor(user , "age"); // return decriptot object


// console.log(newFlags);



// for(let key in obj ){
//     console.log(key);
// }
























// Object is not iterable so this will result an error
// for(let value of obj ){
//     console.log(value);
// }




















// const arr = [ "elem1" , "elem2" ];
// for(let value  of arr){
//     console.log(value);
// }

// for(let key  in arr){
//     console.log(key);
// }



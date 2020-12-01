//  what is a prototype 
// it is a property in a function that referes to an object





//remember every function has a prototype object
// you can access it using funcName.prototype 
// {
//   constructor:f(){},
//   __prototype__:{....}
// }


// every Object has a property __prototype__ which is used to connect to the prototype object
let testObj = new Object();
console.log(testObj);

let myObj = {}; // implictly let myObj = new Object(); // new Object() is the constructor function to build any object
console.log(myObj);
// myObj.__prototype__ = myObj.constructor.prototype 
// __prototype__ is a property and prototype is an object within a function 
// cosider __prototype__ as setter/getter of .protoype object within a function 
let myAnotherObj = Object.create(Object.prototype);
console.log(myAnotherObj);

let func = function(){
}



console.log(func);


let Car  = function (color){
   this.color= color;
}
// "protoype" is a property in a function that referes to an object
Car.prototype.getColor= function(){
    return this.color;
}
let Vehicle= function (name){
  this.name=name;
}
//__prototype__ is property that is used to connect with the prototype object 
Car.__prototype__= Vehicle;
let redCar = new Car('red');

console.log(Object.getPrototypeOf(Car));


console.log(Car);
 // log body of Car function
// ƒ (color){
//     this.color= color;
// }

console.log(redCar);
// log car object 
// since that car has a __protype__ Vehicle so
// {
//   color: "red"
// __proto__: Object
// }

console.log(Car.prototype);
// logs the parent protype object of Car
console.log(Car.__prototype__);
// logs the object of Car.__prototype__ which is vehicle




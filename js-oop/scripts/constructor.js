console.log('constructors');

function sayHi(){
    console.log('say hi');
}
console.log(sayHi);

function Car(color){
  this.color = color;
}
Car.prototype = Object;

console.log(new Car('red').isPrototypeOf(Object));
console.log(Object.prototype );
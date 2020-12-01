
// Object creation
//  factory pattern
const personFactory=function(name,age,gender){
   let temp={};
   temp.name=name;
   temp.age=age;
   temp.gender=gender;
   temp.printPerson=function(){
       console.log(`${this.name}- ${this.age} - ${this.gender}`);
   }
   return temp;
}
// const person1=personFactory('abdo',23,true);
// person1.printPerson();

// Instructor pattern

// var PersonConstructor=function(name,age,gender){
//     this.name=name;
//     this.age=age;
//     this.gender=gender;

//     this.printPerson=function(){
//         console.log(`${this.name}- ${this.age} - ${this.gender}`);
//     }

// }
// var personC1=new PersonConstructor('abbad',34,true);
// personC1.printPerson();

// prototype pattern
// var personProto=function (){
// }

// personProto.prototype.name='default name';
// personProto.prototype.age=43;
// personProto.prototype.gender=true;

// personProto.prototype.print=function(){
//     console.log(`${this.name} -- ${this.age} -- ${this.gender}`);
// }
// var personP1=new personProto();


// personP1.name='protos';
// personP1.age=34;
// personP1.gender=false;

// console.log(personP1.hasOwnProperty('name'));


// dynamic prototypal design pattern






















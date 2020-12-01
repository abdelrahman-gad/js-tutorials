let log = console.log;

/***
 * types of binding with this
 * 1-implicit biniding 
 * 2-explicit binding  [call, apply , bind] "it exists with details in different file"
 * 3-"new" binding
 * 4-window
 */ 
// 1-  --------------------------------implicit binding--------------------------------------
 
// ex1
// var my ={
//     name:'abdurrahman',
//     age:25,
//     sayName:function(){
//         console.log(`my name is ${this.name}`);
//     }
// }
// my.sayName(); // now implicitly this refer to the object that at the left of dot of function


// ex2 ------- with mixin
function sayNameMixin(obj){
    obj.sayName=function(){
        console.log(`my name is ${this.name}`);
    }
}

var me ={
    name:'abdurrahman',
    age:25,
 }

var you ={
    name:'gad',
    age:30
}

// test login object me before connecting with sayNameMixin 
log(me);
// now connect sayNameMixin with objects me,you
sayNameMixin(me);
sayNameMixin(you);
// after connecting you can use the function sayName
me.sayName();
you.sayName();



// 3----------------------------"new" bindding-----------------------------------
function Person(name){
    //this={}; object is created and binded behind the scenes
     this.name=name;
    // return this; // returned  also
}
const p1 =new Person('abdo');
log(p1);


// 4----------------------------window binding------------------------------
// "this" in any function that is not connected to any context then "this" is connected to the window object
// an important notation window binding is not available with the "use strict" mode
// ex 
function hiGlob(){
   // 'use strict';
    this.greet='hi';
    log(this);
}
hiGlob();
log(this.greet);





















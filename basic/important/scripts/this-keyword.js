// console.log(this);
// method -> function inside an object

// 1-  "this" globally  referes to th global Object which is window
//console.log(this);


// 2- "this" within a method referes to the object that runs this method

const person = {
    fname:'abdurrahman',
    lname:'gad',
    fullName(){
      return this.fname+' '+this.lname;
    }
}
let completeName =  person.fullName();
console.log(completeName);



console.log('---------------------------');
// 3- "this" within a constructor referes the implicitly created object "this" in the 
function Person ( fname , lname ){
   // this={}; implicitly created object
   this.fname=fname;
   this.lname=lname;
   this.fullName=function(){ return this.fname+' '+this.lname};
   // return this; implicitly
} 

const p1 = new Person('abdurrahman', 'gad');
console.log(p1.fullName());


console.log('---------------------------');
// 4- "this"  within higher order function

const video = { 
     name:'OOP Tuts' ,
     tags:['programming' , 'web' , 'computer science'],
     showTags(){
       //console.log(this);
       //console.log(this.tags);
    //    this.tags.forEach(function(tag){
    //      console.log( this.name + ' ' + tag);
    //    }, this );
      this.tags.forEach(function(tag){
          console.log(this);
          console.log(this.name + ' ' +tag);
      },this)
   }
};
video.showTags();


//5- "this" within arrow function  refers to the global object 
//     note arrow function doesn't this so "this" within arrow function refers to global object
console.log('---------------------------');
const greet = ( name ) => {  
   //console.log(this);
   console.log(name);
}
greet('abdo');


console.log('---------------------------');
// 6- if you use this within arrow function within an object you have to bind this arrow function to this object

const camera= {
    name:'canon',
    price:500,
    info:() => {
       return `this camera is ${this.name} and it costs like ${this.price}`;//this now refers to window global object so it is not going to run
    },
    //
   //  info:this.info.bind(this)
}

const cameraInfo = camera.info();
console.log(cameraInfo);










// 1 call
// 1- function  name => call
// 2- how To         => funcName.call(obj, arg1 , arg2 , arg3)
// 3- details         funcname = function you want to connect  
//                    obj      = object you want to connect the function with
// 4-invokation time  it immediately invokes the function                    
function fullName(){
         return `${this.firstName} ${this.lastName}`;
}
const person1 = {
    firstName:'abdurrahman',
    lastName:'gad',
};
const person2 = {
    firstName:'Mohammed',
    lastName:'azmy'
};
let result = fullName.call(person1);
console.log(result);


// 2 apply 
// 1- function name => apply
// 2- how to        => funcName.apply(obj, [arg1 , arg2 , ...] );
// 3- details          funcname = function you want to connect 
//                     obj      = object you want to connect the function with
//                     [arg1 , arg2 , .... ]  array of parameter passed to the function
//4-invokation time    it immediately invokes the function

function greet(word1, word2){
    return `Hi I am ${this.firstName} ${this.lastName}  ${word1} ${word2}`
}
const person3= {
  firstName:'abdurrahman',
  lastName:'azmy'
};
console.log(greet.apply(person3, ['welcome !' , 'Happy yo see you']));




// 3 bind 
// 1- function name => bind
// 2- how to        => bound = funcName.bind(obj);
//                     bound(arg1, arg2 , ...);
// 3- details          funcname = function you want to connect 
//                     obj      = object you want to connect the function with
//                     (arg1 , arg2)   parameters passed to the function
// invokation time     it returns a function then the returned function can be invoked
const bound = greet.bind(person3);
console.log(bound('Hi ','How Is it going'));





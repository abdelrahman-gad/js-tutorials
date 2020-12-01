// create promise 
// parameter of Promise constructor function is the executer funtion
const p = new Promise( ( resolve , reject )=> {
    let val = 'test val';

   let users = [
       {name:'abdo',job:'engineer',age:12},
       {name:'abbad',job:'teacher',age:12},
       {name:'amr',job:'doctor',age:5},
       {name:'gad',job:'farmer',age:5},
   ];
   resolve(users);
   reject('promise was rejected');
});

p.then(users => {return  users.map( user => user.name  + ' is  a ' +user.job )  }  )
 .then(usersInfo => console.log(usersInfo))
 .catch(err=>console.log(err))
 .finally(()=>console.log('data was logged successfully'));
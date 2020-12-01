/*
 javascript works due to the concept of lexical environment

* closure means inner function has accesss to the variables are in the outer function 
* that includes it
* another defintion = using variables in the outer scope 
**/ 

function func(){
    //    var x is in the outer scope of function subFunc
    //    var x is in the inner scope of the function func
      var x= 4; 
      function subFunc(){
        //   console.log(x);
         //var x = 5;
         function subSubFunc(){
             console.log(x);
         }
         subSubFunc();
         console.dir(subSubFunc);
      } 
      subFunc();
      console.dir(subFunc);
} 
func();
console.dir(func);


// const addTo = ( passed ) => {
//     console.log('add to');
//       const add = ( inner ) => {
//         return passed+inner;
//       }
//       console.dir(add);
//       return add;
   
// }

// console.log(addTo(3));
// const addToThree = addTo(3);
// console.log(addToThree(3));





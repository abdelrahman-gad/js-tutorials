function printNumbers(from , to ){

let current= from;
let timeIntervalId = setInterval(function(){
     console.log(current);
     current++;
     if(current > to){
         clearInterval(timeIntervalId);
     }
  },1000);
}
//printNumbers(3,7);



// creating interval with setTimeout

// let timeoutId = setTimeout( function count(){
//     console.log('SetTimeOut');
//     setTimeout(count,1000);
// } ,1000);


//  create prinNumbers func using setTimeout 

function newPrintNumbers(from , to ){
  let current = from;
    
    let timeoutId = setTimeout( function count(){
        console.log(current);
        current++;
        if(current < to){
            setTimeout(count,1000);
        }
        
    } ,1000);
}
newPrintNumbers(4,10)


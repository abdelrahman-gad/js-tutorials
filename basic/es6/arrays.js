/*
  Boiler plate used 
  @function
  @name functionName
  @description  functionDescription
  @arg  functionArguement
  @return [{type}] demo 
  
*/ 


var  ages=[22,34,53,34];
/*
  @function
  @name every
  @description  checks if array meets a specific condition
  @arg  function
  @return [{boolean}] true
  
*/   
 var res= ages.every(age =>
         {    return     age>18;  }
    );
console.log(res);

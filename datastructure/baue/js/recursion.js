const fact =function(n){
    console.log(n);
   if (n==1){
       return 1;
   }else {
     return   fact(n-1);
   }
}

fact(4);
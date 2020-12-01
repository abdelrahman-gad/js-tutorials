document.getElementById('topic').innerHTML='IIFE Imediately Invoked Function Expression';


(function(){

    console.log('my favourite number is 4');
})();

(favNum=function(num=3){
  console.log(`my favourit number is ${num}`);
})();
favNum(5);


// native maps in ES6
// const myMap=new Map([['a1','hello'],['b2','goodBy']]);
// myMap.set('c3','what');
// // console.log(myMap);
// // Weak sets and waekmap has to do with object
// // weak map
// const key1={
//     id:1
// };

// const car1={
//     name:'honda',
//     model:'civic'
// };
// const carMap=new Map();
// carMap.set(key1,car1);
// console.log(carMap);


// my custom map


let myMap=function(){
    this.collection={};
    this.count=0;
    this.size=function(){
        return this.count;
    }
    this.set=function(key,value){
        
        this.collection[key]=value;
        this.count++;
    }
    this.has=function(key){
      return  (key in this.collection);
    }
    this.get=function(key){
      return (key in this.collection)? this.collection[key]:null;
    }
    this.delete=function(key){
      if(key in this.collection){
        delete this.collection[key];
        this.count--;
      }
    }
    this.values=function(){
      let result =new Array();
      for(let key of Object.keys(this.collection)){
        result.push(this.collection[key]);
      }
      return result;
    }
    this.clear=function(){
      this.collection={};
      this.count=0;
    }
}
let carMap=new myMap();
carMap.set('a','audi');
carMap.set('t','toyota');
carMap.set('b','bougati');
console.log(carMap.values());
carMap.delete('b');
console.log(carMap.values());

// console.log(carMap.get('t'));
// console.log(carMap.size());

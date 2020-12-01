// Queue is like an array but it is "FIFO" First In First Out
function Queue(){
 var collection=[];
  this.print=function(){
      console.log(collection);
  }
  this.enqueue=function(element){
      collection.push(element)
  }
  this.dequeue=function () {
    collection.shift();
  }
//   get the fist element in the queue first inserted element
  this.front=function(){
    return collection[0];
  }
  this.size=function(){
      return collection.length;
  }
  this.isEmpty=function(){
      return (collection.length===0);
  }


}
var q=new Queue();
q.enqueue('d');
q.dequeue();
q.print();
console.log(q.front());
console.log(q.size());
console.log(q.isEmpty());
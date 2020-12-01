// queue is very mauch similar to the stack however it [FIFO] First in First out
function Queue(){
    this.dataStore=[];
    this.enqueue=enqueue;
    this.dequeue=dequeue;
    this.front=front;
    this.back=back;
    this.toString=toString;
    this.empty=empty;
    this.size=size;
}


// insert an element to the end of the  queue
function enqueue(element){
    this.dataStore.push(element);
}

// remove the first element of the queue
function dequeue(){
    this.dataStore.shift();
}
// return return the first element of the queue
function front(){
  return this.dataStore[0];
}
// return the last element of the queue
function back(){
 return this.dataStore[this.dataStore.length-1];
}
function toString(){
    return this.dataStore;
}

// retutn bolean value wether the queue contains elements or not
function empty(){
 return this.dataStore.length===0?true:false;
}

function size(){
    return this.dataStore.length;
}
const names =new Queue();
// names.enqueue('a');
// names.enqueue('b');
// names.enqueue('c');
// names.enqueue('d');

console.log(names.toString());
console.log(names.empty());
// console.log(names.front());
// console.log(names.back());

// names.dequeue()

// console.log(names.toString());










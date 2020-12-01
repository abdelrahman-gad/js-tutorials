function Stack(){
    this.dataStore=[];//array stores elements
    this.top=0;
    this.push=push;
    this.pop=pop;
    this.peek=peek;
    this.length=length;
    this.clear=clear;
    this.toString=toString;
}

const books=new Stack();
books.push('a');
books.push('b');
books.push('c');
console.log(books.length());
// books.pop();
console.log(books.toString());
console.log(books.length());
console.log(books.peek());
books.clear();
console.log(books.toString());
console.log(books.length());
function toString(){
    return this.dataStore;
}
function push(element){
    this.dataStore[this.top]=element;
    ++this.top;
}
function pop(){
  return this.dataStore[--this.top];

}

function peek(){
  return this.dataStore[this.top-1];
}
function length(){
  return this.top;
}

function clear(){
  delete this.dataStore;
  this.dataStore=[];
  this.top=0;
}
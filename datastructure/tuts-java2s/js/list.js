function List(){
   this.listSize=0;
   this.pos=0;
   this.listData=[];//initialize 
   this.clear=clear;
   this.find=find;
   this.toString=toString;
   this.insert=insert;
   this.append=append;
   this.remove=remove;
   this.front=front;
   this.end=end;
   this.next=next;
   this.prev=prev;
   this.length=length;
   this.currentPosition=currentPosition;
   this.moveTo=moveTo;
   this.getElement=getElement;
   this.length=length;
   this.contains=contains;
}

// return the length of the list
function length(){
    return this.listData.length;
    }
    //return string of all elements in the set
    function toString(){
      return this.listData
    }

// appending element at the end of the list
function append(element){
    this.listData[this.listSize++]=element;
}
// find the index of an element 
function find(element){
    for(i=0;i<this.listData.length;i++){
        if(element==this.listData[i]){
          return i;
        }
    }
    return -1;     
}

// remove an element from 
function remove(element){
    var foundAt=this.find(element);
    if(foundAt>-1){
        this.listData.splice(foundAt,1);
        --this.listSize;
        return true;
    }
    return false;      
}

// insert new element after a specific element
function insert(element,after){
    var insertPos=this.find(after);
    if(insertPos>-1){
        this.listData.splice(insertPos+1,0,element);
        ++this.listSize;
        return true;
    }
        return false;
}
// Removing all elements from the list
function clear(){
 delete this.listData;
 this.listData=[];
 this.listSize=0;   
}

// determining if a given element is in the array;
function contains(element){
    for(let i=0;i<this.listData.length;i++){
        if(element==this.listData[i]){
            return true;
        }
    }
    return false;
}

// traversing via the list
function front(){
    this.pos=0;
}
function end(){
    this.pos=this.listSize-1;
}
function prev(){
    if(this.listSize>0){
        --this.pos;
    }
}
function next(){
    if(this.pos<this.listSize-1){
        ++this.pos;
    }
}
function currentPosition() { 
    return this.pos; 
} 
function moveTo(position) { 
    this.pos = position; 
} 
function getElement() { 
    return this.listData[this.pos]; 
}



var names=new List();
names.append('a');
names.append('b');
names.append('c');
names.append('d');
names.next();
names.end();
names.front();
names.moveTo(3);
names.prev();
console.log(names.getElement());
//  names.insert('f','b');
// console.log(names.contains('k'));
// //  names.clear();
// console.log(names.toString());
// names.remove('r');
// names.toString();
// console.log(names.length());
// names.append('d');
// names.toString();
// console.log(names.length());
// console.log(names.find('d'));



































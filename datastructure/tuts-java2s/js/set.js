// the main feature of Set is =>it doesn't contain repeated elements

function Set() { /*from  w  w w .  java2  s.c  o  m*/
    this.dataStore = []; 
    this.add = add; 
    this.remove = remove; 
    this.size = size; 
    this.union = union; 
    this.subset = subset; 
    this.show = show; 
    this.contains = contains;
    this.intersect = intersect;
    // this.difference = difference;
} 

// add new item to the end of the set
function add(data){
//  check first the data does't already exist
    if(this.dataStore.indexOf(data)<0){ 
       this.dataStore.push(data);
       return true;
    }else{
        return false;
    }

}
function remove(data){
    var pos =this.dataStore.indexOf(data);
    console.log(pos);
    if(pos>-1){
      this.dataStore.splice(pos,1);
      return true;
    }else{
      return false;
    }
}

// return list elements of the set
function show(){
    return this.dataStore;
}

// return the size of set [number of elements in this set]
function size(){
    return this.dataStore.length;
}

// return the unio of to sets
function union(set){
   const unionSet=new Set();
    for(let i=0;i<this.dataStore.length;i++){
        unionSet.add(this.dataStore[i]);
    }
    for(let i=0;i<set.dataStore.length;i++){
        unionSet.add(set.dataStore[i]);
    }
    return unionSet;
}

// return boolean value wether this set contains an element or not
function contains(data){
     return this.dataStore.indexOf(data)>-1?true:false;     
}


// return set contains the intersected elements between two sets
function intersect(set){
   const intersectSet=new Set();
   for(let i=0;i<set.dataStore.length;i++){
       if(this.contains(set.dataStore[i])){
           intersectSet.add(set.dataStore[i]);   
       }
   }
   return intersectSet;
}

function subset(set){
    if(this.size() > set.size()){
        return false;
    }else{
     for(var member in this.dataStore){
         if(!set.contains(member)){
             return false;
         }
     }
    }
    return true;
}

const letters=new Set();

// letters.add('a');
// letters.add('b');
letters.add('c');
letters.add('d');
// console.log(letters.contains('h'));

const newLetters=new Set();
newLetters.add('d');
newLetters.add('c');
newLetters.add('f');
newLetters.add('g');
// console.log(letters.show());
// console.log(newLetters.show());
console.log(letters.subset(newLetters));
// console.log(letters.union(newLetters).show());
// console.log(letters.intersect(newLetters).show());

// console.log(letters.dataStore[2]); 

// console.log(letters.show());
// console.log(letters.size());
// letters.remove('a');
// console.log(letters.show());
// console.log(letters.size());

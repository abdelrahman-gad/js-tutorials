// Set is like an array but doesn't contain a doublicated elements

function mySet(){
// the var collection will hold the set elements
    var collection=[];
    // this function will check the presense of an element
    this.has=function(element){
        return (collection.indexOf(element) !== -1);
    }
    //   this functions returns the elements of the set
    this.values=function(){
        return collection;
    }
    // this method will add new elements to the set
    this.add=function(element){
        // check the presence of
        if(!this.has(element)){
            collection.push(element);
            return true;
        }else{
         return false;
        }
    }
    // this will remove an element
    this.remove=function(element){
        if(this.has(element)){
            index=collection.indexOf(element);
            collection.splice(index,1);   
            return true;
        }else{
            return false;
        }
    }
    // this method returns how many elements in the sets
    this.size=function(){
       return collection.length;
    }
   // union set gets the of two sets
    this.union=function (otherSet){
     var unionSet=new mySet();
     var firstSet=this.values();
    

        firstSet.forEach(e => {
        unionSet.add(e);
        });

        otherSet.forEach(e=>{
            unionSet.add(e);
        });
        return unionSet;
    }

     // this method will return the intersection of two sets as a new set
     this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach((e)=>{
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };

//  deferrence set returns new set has those elements in the seconds but not in the first set
   this.difference=function(otherSet){
       var differenceSet=new mySet();
       var firstSet=this.values();
       firstSet.forEach(e=>{
           if(!otherSet.has(e)){
               differenceSet.add(e);
           }
       });
       return differenceSet;
   }
  
    //  subset method returns boolean[true/false] if  the current set   is a subset ofthe passed set
    this.subset=function(otherSet){
         var firstSet=this.values();
        return  firstSet.every((e)=>{
            return otherSet.has(e);
          });
    }  



}
var setA=new mySet();
// setA.add('one');
// setA.add('two');
setA.add('three');
var setB=new mySet();
setB.add('three');
setB.add('four');
setB.add('five');

console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());
console.log(setA.subset(setB));
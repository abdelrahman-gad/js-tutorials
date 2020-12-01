// Stacks exists by default in arraya
// Functions: push,pop,peek,length

// check palindrom
// var letters = [];
// var word ='racecar';
// var rword ='';

// for(let i=0;i< word.length; i++ ){
//   letters.push(word[i]);
// }

// for(let i=0; i< word.length; i++){
//     rword += letters.pop();
// }

// if(word==rword){
//     console.log(word+' palindrome');
// }else{
//     console.log(word+' not a palindrome');
// }
const Stack=function(){
    // pointer
     this.count = 0;
    //  container Object
     this.storage={}
    //   pushing values into stack
     this.push=function(value){
     this.storage[this.count]=value;
    //   increment the counter by 1
      this.count++;
    }
    this.pop=function(){
        
        if(this.count==0){  //check if the counter is empty
            return undefined;
        }
        // decrement the counter by 1
        this.count--;
        // extract out the element value and asigning it to a value so it will be returned
        var value=this.storage[this.count];
        delete this.storage[this.count];
        
        return value;   
    }
    this.peek=function (){
        // get the last inserted value
        return this.storage[this.count-1];

    }
    this.length=function(){
        return this.count;
    }
}

var myStack=new Stack();
myStack.push('abdurrahman');
myStack.push('gad');
myStack.push('mohammed');

console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.length());
console.log(myStack);









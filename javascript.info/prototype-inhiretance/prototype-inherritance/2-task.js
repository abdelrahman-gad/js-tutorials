let head = {
    glasses: 1,
    info:function(){
     console.log(this);
    }
  };
  
  let table = {
    pen: 3,
    __prototype__:head,
    info:function(){
        console.log(this);
    }
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __prototype__:table,
    info:function(){
        console.log(this);
       }
  };
  
  let pockets = {
    money: 2000,
    __prototype__:bed,
    info:function(){
        console.log(this);
       }
  };
  
function Pockets(money){
 this.money=money;
}


pockets.prototype= bed;
let p = new Pockets(400);
  console.log(pockets.prototype);



  bed.__prototype__= table;
  table.__prototype__= head;
  // console.log(pockets.pen);
   console.log(bed);
  // console.log(table);
  // console.log(head);

  let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat();


  console.log(pockets);
  console.log(pockets.__prototype__);
  // console.log(pockets.prototype);
  let obj={};
  console.log(obj.__prototype__);


  function Cow(name) {
    this.name = name;
    alert(name);
  }
  
  let cow = new Cow("White Rabbit");
  
  let cow2 = new cow.constructor("Black Rabbit");
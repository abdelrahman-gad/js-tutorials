const car={
    name:'mercedes',
    model:'sedan',
    price:3000
}
// for(var prop in car){
//     if(car.hasOwnProperty(prop)){
//         console.log(prop);
//     }
// }

// const keys=Object.keys(car);
// console.log(keys);
// const values=Object.values(car);
// console.log(values);
// const entries=Object.entries(car);
// console.log(entries);
if(name in car){
    console.log(true);
}

let arr =Object.keys(car);
for(let i of arr){
    console.log(i);
}


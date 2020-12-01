// console.log('date file is working');


let dateInNanoSeconds=73000000000000;  
let date = new Date(dateInNanoSeconds);

let dateInMinutes=dateInNanoSeconds/60;
let dateInHours=dateInMinutes/60;
console.log(date.getMinutes());

console.log(dateInMinutes);
console.log(dateInHours);

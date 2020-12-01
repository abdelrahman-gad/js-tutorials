document.getElementById('task-title').innerText = `Get Factorial`;

const getFactorial = ( num ) => {
     if ( num <= 1 ) return 1;
     return num * getFactorial(num - 1);
}
let res = getFactorial(6);
console.log(res);



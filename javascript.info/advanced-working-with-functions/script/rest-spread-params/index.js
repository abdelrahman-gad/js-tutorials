document.getElementById('task-title').innerText='rest operator';
const names = ['abdelraheem','azmy','gad'];

console.log(names);

//  rest convert  rest of params into an array;

// 1- spread convert from array into individual params values  2-it helps in deap copying arrays


                   //rest
const getParams = (...args)=> {
               // spread
    console.log(...args);
}

getParams('abdo', 'azmy');
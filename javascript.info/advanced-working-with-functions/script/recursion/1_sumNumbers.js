document.getElementById('task-title').innerText = `Sum Numbers`;

const sumTo = ( num ) => {
    if(num==1) return 1;
    return num + sumTo(num-1);
}

let result = sumTo(4); // 1 + 2 + 3 + 4 = 10
console.log(result);



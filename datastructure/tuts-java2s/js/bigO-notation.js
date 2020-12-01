const sumUpToV1= n => {
 return (n* (n+1) )/2;
}

const sumUpToV2=n=>{
    let total=0;
    for (let i=0;i<=n;i++){
        total +=i;
    }
    return total;
}
let t1,t2;
t1=Date.now();
console.log(sumUpToV1(2400000000));
 t2=Date.now();
console.log(`${t2-t1/1000000} seconds` );

 t1=Date.now();
console.log(sumUpToV2(2400000000));
 t2=Date.now();
console.log(`${t2-t1/1000000} seconds` );



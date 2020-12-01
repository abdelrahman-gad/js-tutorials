
const sayWelcome = () => {
    console.log('Welcome');
}

let timeId = setTimeout( sayWelcome , 2000 );
let intervalId = setInterval( sayWelcome ,500);
clearTimeout(timeId);
clearInterval(intervalId);


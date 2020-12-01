let timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick,500); // (*)
  }, 500);


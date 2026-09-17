let count = 0;

if (count === 10) { clearInterval(timer); };
let timer = setInterval(tick, 1000);

function tick() {
  count = count + 1;
  console.log("Tick " + count);
}

setInterval(tick, 1000);

//Tick 1 tick 2 tick 3

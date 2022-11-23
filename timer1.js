

let times = process.argv.slice(2);
const timer = function(beep, times) {
  for (const time of times) {
    if (times.length === 0) { //!times.length same as time.length === 0
      return;
    }
    if (time < 0 || isNaN(time) ) { //t !== Number(t)
      continue;
    }
    setTimeout(() => {
      console.log("this is time:", time * 1000); //
      process.stdout.write(beep);
    }, time * 1000);
  }
};
timer('\x07', times);
function memoizedFn(n) {
  const cache = {}
   function expensivePowerCalculation() {
    if(cache[n]) return cache[n]
    const startTime = Date.now();
    let currentTime = startTime;
    while (startTime + 1000 > currentTime) {
      currentTime = Date.now();
    }
    const power = n**2
    cache[n]=power
    return  power
  };
  return  expensivePowerCalculation
}

const a = memoizedFn(5)
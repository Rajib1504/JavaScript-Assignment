function waitingTime(waitingTimes, serialNumber) {
  if (
    Array.isArray(waitingTimes) === false ||
    (typeof serialNumber !== "number" && serialNumber > waitingTimes.length - 1)
  ) {
    return "Invalid Input";
  } else {
    let sumArray = 0;
    let avg = 0;
    const sl = serialNumber - 1;
    let slLeft = 0;
    let timeNeed = 0;
    for (const item of waitingTimes) {
      sumArray += item;
    }
    avg = sumArray / waitingTimes.length;
    avg = Math.round(avg);
    slLeft = sl - waitingTimes.length;
    timeNeed = avg * slLeft;

    return timeNeed;
  }
}

const values = waitingTime([3, 5, 7, 11, 6], 10);
console.log(values);

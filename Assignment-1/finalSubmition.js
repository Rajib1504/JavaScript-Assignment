function calculateTax(income, expenses) {
  if (income < expenses || expenses < 0 || income < 0) {
    return "Invalid Input";
  }
  const totalIcome = income;
  const totalExpences = totalIcome - expenses;
  const tax = totalExpences * 0.2;
  return tax;
}

function sendNotification(email) {
  const checking = email.indexOf("@");
  if (checking == -1) {
    return "Invalid Email";
  }
  const myMail = email.split("@");
  const user = myMail[0];
  const domain = myMail[1];
  const str = user + " sent you an email form " + domain;
  return str;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  } else if (name[0] !== name[0].toLocaleUpperCase()) {
    return false;
  }
  for (const n of name) {
    if (n >= "0" && n <= "9") {
      return true;
    }
  }
  return false;
}

function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    typeof obj.name !== "string" ||
    (typeof obj.testScore !== "number" && obj.testScore <= 50) ||
    (typeof obj.schoolGrade !== "number" && obj.schoolGrade <= 30) ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }
  const totalScore = obj.testScore + obj.schoolGrade;
  const fFamilyTotalScore = totalScore + 20;
  if (obj.isFFamily === false && totalScore >= 80) {
    return true;
  } else if (obj.isFFamily === true && fFamilyTotalScore >= 80) {
    return true;
  }
  return false;
}

function waitingTime(waitingTimes, serialNumber) {
  if (
    Array.isArray(waitingTimes) === false ||
    (typeof serialNumber !== "number" && serialNumber > waitingTimes.length - 1)
  ) {
    console.log("Invalid Input");
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

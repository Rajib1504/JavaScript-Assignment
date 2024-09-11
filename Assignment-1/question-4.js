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

const student = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
};
const test = calculateFinalScore(student);
console.log(test);

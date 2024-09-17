function calculateTax(income, expenses) {
  if (income <= expenses || expenses < 0 || income < 0) {
    return "Invalid Input";
  }
  const totalIcome = income;
  const totalExpences = totalIcome - expenses;
  const tax = totalExpences * 0.2;
  return tax;
}

const expencess = calculateTax("10000", "3000");
console.log(expencess);

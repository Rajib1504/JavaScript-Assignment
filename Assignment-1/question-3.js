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

const result = checkDigitsInName("Raj123");
console.log(result);

function checkForFactor(factor, base) {
  let validNumber =
    !Number.isNaN(base) &&
    !Number.isNaN(factor) &&
    typeof base === "number" &&
    typeof factor === "number";

  if (validNumber) {
    if (base % factor === 0) return true;
    else return false;
  } else return "Invalid Number";
}

console.log(checkForFactor(9, 3));
console.log(checkForFactor(null, NaN));
console.log(checkForFactor("", 4));
console.log(checkForFactor(7, undefined));

// 1. check if both inputs are equal to number and not equal to NaN
// 2. if not equals to number and not equal to NaN, show error message
// 3. factor / base equal to 0, return true
// 4. factor / base equal is not to 0, return false

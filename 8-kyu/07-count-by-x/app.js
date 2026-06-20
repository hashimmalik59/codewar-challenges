function countBy(baseNumber, counterNumber) {
  let result = [];
  for (let i = 1; i <= counterNumber; i++) {
    result.push(baseNumber * i);
  }
  return result;
}
console.log(countBy(3, 5));

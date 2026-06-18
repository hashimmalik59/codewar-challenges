function maps(x) {
  let newMap = [];
  for (let i = 0; i < x.length; i++) {
    newMap.push(x[i] * 2);
  }
  return newMap;
}
console.log(maps([1, 2, 3]));
console.log(maps([4, 5, 6]));
console.log(maps([7, 8, 9]));

function removeChar(str) {
  // if string length >= 2
  if (str.length >= 2) {
    let strToArr = str.split(""); // converts string into array

    strToArr.shift(); // removing first element from an array
    strToArr.pop(); // removing last element of an array

    let arrToStr = strToArr.join(""); // converts array into string

    return arrToStr; // return string
  } else {
    // if string length < 2
    return "Character is too short";
  }
}

console.log(removeChar("Hashim"));
console.log(removeChar("Malik"));
console.log(removeChar("Ahmad"));
console.log(removeChar("Hamza"));
console.log(removeChar("Abdullah"));
console.log(removeChar("Abbas"));
console.log(removeChar("Musa"));
console.log(removeChar("Ali"));

// 1. convert string into array
// 2. access first element of an array
// 3. access last element of an array
// 4. remove first element of an array
// 5. access first element of an array
// 6. convert array into string
// 7. return string

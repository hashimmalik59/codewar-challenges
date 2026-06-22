function vowelRemoval(str) {
  let cleanStr = str.toLowerCase();
  let strToArr = cleanStr.split(""); // converts string into array
  const consonantStr = []; // empty array for consonent letters
  for (let i = 0; i < strToArr.length; i++) {
    if (
      !(
        // if no vowels letters
        (
          strToArr[i] === "a" ||
          strToArr[i] === "e" ||
          strToArr[i] === "i" ||
          strToArr[i] === "o" ||
          strToArr[i] === "u"
        )
      )
    ) {
      consonantStr.push(strToArr[i]); // pushing consonents into empty array
    }
  }
  return consonantStr.join(""); // converts array into string
}
console.log(vowelRemoval("HaSHiM"));
console.log(vowelRemoval("MalIk"));
console.log(vowelRemoval("AhmAD"));

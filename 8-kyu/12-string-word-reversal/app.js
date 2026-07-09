// 1. Input: String
// 2. Ouput: String
// 3. Psuedo-code:
// i. function which takes an input of string
// ii. create and empty array
// iii. convert this string into an array
// iv. for loop this converted array
// v. grab every word
// vi. push this every word into this empty array
// vii. reverse every word letters
// viii. converts this array into string
// ix. return string

function stringWordReversal(str) {
  let strEachWordReversal = [];

  const strToArr = str.split(" ");

  for (let i = 0; i < strToArr.length; i++) {
    strEachWordReversal.push(strToArr[i].split("").reverse().join(""));
  }

  return strEachWordReversal.join(" ");
}

console.log(stringWordReversal("My name is Hashim"));
console.log(stringWordReversal("Hashim you are the great"));
console.log(stringWordReversal("You are best Hashim"));

// function stringWordReversal(str) {
//   let reversedWordsArray = [];

//   const words = str.split("");

//   for (let i = 0; i < words.length; i++) {
//     reversedWordsArray.push(words[i].split("").reverse().join(""));
//   }

//   return reversedWordsArray.join("");
// }

// console.log(stringWordReversal("double  spaces"));

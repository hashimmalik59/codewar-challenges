// 1. Input => string("my name is hashim")
// 2. Output => string("My Name Is Hashim")
// 3. Psuedo-code
// i. converting a string into array(for accessing every letter from string)
// ii. iterating from each word
// iii. converts first letter into upper case
// iv. get every word characters except first one
// v. concate first letter and all letter expcept first one
// vi. convert array into string
// vii. return string

function upperGenerator(str) {
  let strIntoArr = str.split(" ");
  let strIntoNewArr = [];

  for (let i = 0; i < strIntoArr.length; i++) {
    let newStr = strIntoArr[i][0].toUpperCase() + strIntoArr[i].slice(1);
    strIntoNewArr.push(newStr);
  }
  return strIntoNewArr.join(" ");
}
upperGenerator("my name is hashim");
upperGenerator("javascript is a popular programming language");
upperGenerator("i'm the best, and i'm the greatest");
upperGenerator("consistency + discipline + focus === 100% success");

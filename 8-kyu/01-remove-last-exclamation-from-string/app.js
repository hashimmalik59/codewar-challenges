// Removing last character exclamation mark from string

function remove(string) {
  let strToArr = string.split("");
  if (strToArr.at(-1) === "!") {
    strToArr.pop();
  }
  return strToArr.join("");
}
console.log(remove("!Ali"));
console.log(remove("Ali!"));
console.log(remove("Hashim!"));
console.log(remove("!Hashim"));
console.log("Ma!lik");

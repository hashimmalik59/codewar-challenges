const arr = ["Apple", "Banana", "Orange", "Mango", "Guava"];

function getLength(arr) {
  return arr.length;
}
console.log(getLength(arr));

function getFirstElement() {
  return arr[0];
}
console.log(getFirstElement());

function getLastElement() {
  return arr.at(-1);
}
console.log(getLastElement());

function addElementAtLast() {
  return arr.push("Melon");
}
console.log(addElementAtLast());

function removeElementAtLast() {
  return arr.pop();
}
console.log(removeElementAtLast());

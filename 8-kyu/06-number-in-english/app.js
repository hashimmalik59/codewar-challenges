function switchItUp(num) {
  const numsInWord = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  switch (num) {
    case 1:
      return numsInWord[num];
    case 2:
      return numsInWord[num];
    case 3:
      return numsInWord[num];
    case 4:
      return numsInWord[num];
    case 5:
      return numsInWord[num];
    case 6:
      return numsInWord[num];
    case 7:
      return numsInWord[num];
    case 8:
      return numsInWord[num];
    case 9:
      return numsInWord[num];
    default:
      return "Number is not in between 0-9";
  }
}
console.log(switchItUp(4));

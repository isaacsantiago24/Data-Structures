//solution
function largestOfFour(arr) {
  let answer = [];
  arr.forEach(function (array) {
    answer.push(Math.max(...array));
  });
  return answer;
}

largestOfFour([
  [4, 9, 1, 3],
  [10, 27, 18, 26],
  [32, 35, 37, 49],
  [1000, 1001, 817, 9],
]);

//explanation
function largestOfFour(arr) {
  //empty array to hold all largest numbers
  let answer = [];

  //pass a callback function to forEach()
  //the argument "array" represents each array from the input
  //"..." spread operator to make the elements the argument to Math.max() to help pick out the largest number
  //push each largest number to answer
  //return answer with the largest numbers
  arr.forEach(function (array) {
    answer.push(Math.max(...array));
  });
  return answer;
}

largestOfFour([
  [4, 9, 1, 3],
  [10, 27, 18, 26],
  [32, 35, 37, 49],
  [1000, 1001, 817, 9],
]);

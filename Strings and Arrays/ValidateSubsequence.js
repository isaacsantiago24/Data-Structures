function isValidSubsequence(array, sequence) {
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    let curNum = array[i];
    if (sequence[counter] === curNum) {
      counter++;
    }
    if (counter === sequence.length) {
      return true;
    }
  }
  return false;
}

//break-down
// const validateSubsequence = (array, sequence) => {
//     let j = 0 //this represents the index of the sequence array

// for (let i=0; i< array.length; i++){
//     //if the number we are on in the first array matches the number we on
//     //in the second array then add 1 to the variable j
//     if (array[i] === sequence[j]){
//         j++
//         //add 1 to j
//     }
// }
// if  ( j === sequence.length){
//     return true;
//     //if the final index of the sequence array is equal to the sequence's length then return true
// }else{
//     return false
// }

// }

//find first unique character
//given a string, find the first non-repeating character in it and return it's index
//if it doesn't exist, return -1

//ex
// "aaron" // the r is the first unique character

// //INPUT
// "aaron" //a string

//OUTPUT = a number

//EDGE CASES
//"" an empty string as an input
//no unique character = "aabb"

//ASSUMPTION
//our string will always be letters

//SOLUTION 1
// THE HASH TABLE = KEY: VALUE STORE = IT KEEPS THINGS ORGANIZED AND CAN RETRIEVE THINGS QUICKLY

// "aaron"
// {
//     'a':2,
//     'r':1
// }

//SOLUTION 1
function firstUniqueCharacter(string) {
  const hashTable = {};
  for (let char of string) {
    if (hashTable[char]) hashTable[char]++;
    else hashTable[char] = 1;
  }

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (hashTable[char] == 1) return i;
  }
  return -1;
}
console.log(firstUniqueCharacter("aaron")); //2

//SOLUTION 2
// "aaron".indexOf('a') //gives you the first index of that letter
// "aaron".lastIndexOf('a') //gives you the last index of that letter

function firstUniqueChar(string) {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    //finding the unique character
    if (string.indexOf(char) === string.lastIndexOf(char)) {
      //O(n) and O(n) = n+n= 2n=(2n)*n = O(n^2)
      return i;
    }
  }
  return -1;
}
console.log(firstUniqueChar("aarron"));

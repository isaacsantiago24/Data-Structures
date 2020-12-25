//Given a string , determine it is a palindrome
//Palindrome is a word spelled the same backwards as forwards

//solution 1
function isPalindrome(s) {
  return s.split("").reverse().join("") === s;
  // 'aba' -> ['a','b','a'] ->'aba'
}

isPalindrome("racecar");

//solution 2
function isPalindrome(s) {
  s = s.replace(/[^\w]/gi, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

isPalindrome("racecar");

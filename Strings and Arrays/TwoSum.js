//Given an array of numbers and a target
//return the indices of the numbers that add up to the target

//[3,4,8,2] target: 6
//return 1 and 3

//output will be a tuple

function twoSum(nums, target) {
  const ht = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const want = target - num;
    if (want in ht) {
      const leftIndex = ht[want];
      return [leftIndex, i];
    } else {
      ht[num] = i;
    }
  }
}

twoSum([1, 3, 4], 5); //[0,2]

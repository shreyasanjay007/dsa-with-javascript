

/*
 
 Problem : Two Sum 
 Link : https://leetcode.com/problems/two-sum/submissions/2090528657

 Pattern : Hash Map / Complement

Time Complexity : O(n)

Space Complexity : O(n)

Approach:
Traverse the array once.
For each number, calculate its complement (target - currentNumber).
If the complement has already been seen, return the indices.
Otherwise, store the current number and its index.


 */

function twoSum(nums, target) {

  let seen = {}

  for(let i = 0; i < nums.length; i++){

    let currentNumber = nums[i]

    let complement = target - currentNumber

    if(complement in seen){
      return [seen[complement],i]
    }

    seen[currentNumber] = i 
  }
}

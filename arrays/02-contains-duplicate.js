
/*
 
 Problem : Contains Duplicate 
 Link : https://leetcode.com/problems/two-sum/submissions/2090528657

 Pattern : Hash Set / Seen Values

 */

function containsDuplicate(nums){
  let seen = {}
  for(let i = 0; i < nums.length; i++){
    let currentNumber = nums[i]
    if(currentNumber in seen){
      return true 
    }
    seen[currentNumber] = true 
  }
  return false
}

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))

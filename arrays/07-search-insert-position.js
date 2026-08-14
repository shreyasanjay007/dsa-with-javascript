var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        // Prevent potential overflow (safer than Math.floor((left + right) / 2))
        let mid = left + Math.floor((right - left) / 2);
        
        if (nums[mid] === target) {
            return mid; // Target found, return its index
        } else if (nums[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }
    
    // If target is not found, 'left' points to the correct insertion index
    return left;
};

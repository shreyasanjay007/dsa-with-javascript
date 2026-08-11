function isPalindrome(s) {
    // 1. Clean the string: convert to lowercase and remove non-alphanumeric characters
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 2. Initialize two pointers at opposite ends
    let left = 0;
    let right = cleanStr.length - 1;
    
    // 3. Meet in the middle while comparing characters
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false; // Found a mismatch, not a palindrome
        }
        left++;
        right--;
    }
    
    return true; // All characters matched
}

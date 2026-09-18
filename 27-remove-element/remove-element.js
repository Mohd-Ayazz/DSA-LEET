/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // Pointer to place the next element that is not equal to val
    let k = 0; 
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not the target value
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Move it to the front at index k
            k++; // Increment the count of valid elements
        }
    }
    
    // k represents the number of elements not equal to val
    return k; 
};

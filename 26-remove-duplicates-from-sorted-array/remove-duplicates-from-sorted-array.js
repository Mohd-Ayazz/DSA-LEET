function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let k = 1; // Points to the next position for a unique element

    for (let i = 1; i < nums.length; i++) {
        // If the current element is different from the previous one, it's unique
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

// Example usage:
const nums = [1, 1, 2];
const k = removeDuplicates(nums);
console.log(k);                    // Output: 2
console.log(nums.slice(0, k));     // Output: [1, 2]

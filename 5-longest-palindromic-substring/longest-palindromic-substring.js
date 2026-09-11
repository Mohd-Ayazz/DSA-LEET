/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length < 1) return "";
    
    let start = 0;
    let end = 0;
    
    // Helper function to expand outward from a given center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Returns the length of the palindrome found
        return right - left - 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        // Case 1: Odd-length palindromes (e.g., "aba", center is 'b')
        let len1 = expandAroundCenter(i, i);
        
        // Case 2: Even-length palindromes (e.g., "abba", center is between 'b' and 'b')
        let len2 = expandAroundCenter(i, i + 1);
        
        // Take the maximum length found from the current center
        let maxLen = Math.max(len1, len2);
        
        // If it's longer than our previous max, update the boundaries
        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }
    
    // Extract and return the longest palindromic substring
    return s.substring(start, end + 1);
};

// --- Test Cases ---
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // Output: "bb"

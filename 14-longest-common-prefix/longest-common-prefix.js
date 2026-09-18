/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    // If the input array is empty, return an empty string
    if (!strs || strs.length === 0) return "";
    
    // Assume the first string is the initial common prefix
    let prefix = strs[0];
    
    // Iterate through the remaining strings in the array
    for (let i = 1; i < strs.length; i++) {
        // Shorten the prefix until it matches the start of the current string
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            
            // If the prefix becomes empty, there is no common prefix
            if (prefix === "") return "";
        }
    }
    
    return prefix;
}

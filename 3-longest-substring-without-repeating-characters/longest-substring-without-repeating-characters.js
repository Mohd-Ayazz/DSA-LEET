function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let left = 0; 
    const seenChars = new Map(); 

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        
        if (seenChars.has(currentChar) && seenChars.get(currentChar) >= left) {
           
            left = seenChars.get(currentChar) + 1;
        }

        seenChars.set(currentChar, right);

      
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


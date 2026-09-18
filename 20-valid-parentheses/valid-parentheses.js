function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // If it's a closing bracket
        if (char in map) {
            const topElement = stack.length === 0 ? '#' : stack.pop();
            // If the popped opening bracket doesn't match the mapping, return false
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it to the stack
            stack.push(char);
        }
    }

    // If stack is empty, all opening brackets were correctly closed
    return stack.length === 0;
}

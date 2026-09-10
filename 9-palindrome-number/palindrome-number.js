
var isPalindrome = function(x) {
    
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let original = x;
    let reversed = 0;

    while (x > 0) {
        const remainder = x % 10;
        reversed = (reversed * 10) + remainder;
        x = Math.floor(x / 10); 
    }

    return original === reversed;
};

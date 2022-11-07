var isPalindrome = function(x) {
    let reversedX = x.toString().split('').reverse().join('');
    if(Math.floor(reversedX) === x) {
        return true;
    } else {
        return false;
    }
};
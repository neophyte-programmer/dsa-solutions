var plusOne = function(digits) {
    let str = digits.join('');
    let num = BigInt(str) + BigInt(1);
    return num.toString().split('').map(str => parseInt(str));
 };
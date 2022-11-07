/**
 * @param {number} num
 * @return {number}
 * @description 👇
 * Given a positive integer num consisting only of digits 6 and 9.
 * Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
 */
 function maximum69Number (num: number): number {
    const arr = num.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '6') {
            arr[i] = '9';
            break;
        }
    }
    return parseInt(arr.join(''));

}
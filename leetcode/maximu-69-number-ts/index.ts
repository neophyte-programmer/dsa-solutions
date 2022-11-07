/**
 * @param {number} num
 * @return {number}
 * @description 👇
 * Given a positive integer num consisting only of digits 6 and 9.
 * Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
 */
 function maximum69Number (num: number): number {
    const str = num.toString();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '6') {
            return parseInt(str.slice(0, i) + '9' + str.slice(i + 1));
        }
    }
    return num;
}
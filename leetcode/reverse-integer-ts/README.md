## LEETCODE - Reverse Integer - TypeScript
### CHALLENGE
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**

### PROBLEM SOURCE
[LeetCode](https://leetcode.com/problems/reverse-integer/)

### TEST CASES
```javascript
// TEST CASE 1
console.log(reverse(123)) // 321

// TEST CASE 2
console.log(reverse(-123)) // -321

// TEST CASE 3
console.log(reverse(1534236469)) // 0

// TEST CASE 4

console.log(reverse(120)) // 21
```
### SOLUTION
```javascript
function reverse(x: number): number {
    const isNegative: boolean = x < 0;
    const xstring: string = x.toString()
    const reversedxString: string[] = []
    for (let i = xstring.length - 1; i >= 0; i--) {
        reversedxString.push(xstring[i]);
    }
    const revNum = parseInt(reversedxString.join(''));
    if (revNum > Math.pow(2, 31)) return 0;
    return isNegative ? -revNum : revNum;
}
```
### ANALYSIS

#### Time Complexity
**O(n)**

#### Space Complexity
**O(1)**

#### Runtime: 88 ms

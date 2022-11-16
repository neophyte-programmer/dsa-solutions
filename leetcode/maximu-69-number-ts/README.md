## LEETCODE - 1323. Maximum 69 Number - TypeScript

### Problem
Given a positive integer num consisting only of digits 6 and 9. Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

### Example 1
```
Input: num = 9669
Output: 9969
Explanation:
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.
```

## Problem Source
[1323. Maximum 69 Number](https://leetcode.com/problems/maximum-69-number/) - LeetCode

## Solution
```typescript
function maximum69Number (num: number): number {
    const str = num.toString();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '6') {
            return parseInt(str.slice(0, i) + '9' + str.slice(i + 1));
        }
    }
    return num;
};
```

## Test Cases
```
input: 9669
output: 9969
```

## Complexity
- Time Complexity: O(n)
- Space Complexity: O(n)


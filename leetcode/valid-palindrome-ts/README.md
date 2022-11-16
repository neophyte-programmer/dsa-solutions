## LEETCODE 125. Valid Palindrome - TypeScript

### Problem
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

### Example
```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

### Constraints
```
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
```

## Problem Source
[LeetCode 125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

## Solution
```typescript
function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (!isAlphaNumeric(s[i])) {
            i++;
            continue;
        }
        if (!isAlphaNumeric(s[j])) {
            j--;
            continue;
        }
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

function isAlphaNumeric(c: string): boolean {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
}
```

## Time Complexity
**O(n)**

## Space Complexity
**O(1)**


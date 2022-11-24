## Leetcode - 3. Longest Substring Without Repeating Characters

### Problem Statement
Given a string s, find the length of the longest substring without repeating characters.

### Example 1:
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

### Example 2:
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

### Example 3:
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Solution
```ts
function lengthOfLongestSubstring(s: string): number {
    let longest = 0;
    let current = 0;
    let start = 0;
    let end = 0;
    const set = new Set();
    while (end < s.length) {
        if (!set.has(s[end])) {
            set.add(s[end]);
            current++;
            end++;
        } else {
            set.delete(s[start]);
            current--;
            start++;
        }
        longest = Math.max(longest, current);
    }
    return longest;
};
```

## Test Cases
```
"abcabcbb"
"bbbbb"
"pwwkew"
""
" "
"au"
"dvdf"
"abba"
```

## Complexity Analysis
- Time Complexity: O(n)
- Space Complexity: O(n)
- Runtime: 132 ms, faster than 98.98% of TypeScript online submissions for Longest Substring Without Repeating Characters.


## Tags
- Set



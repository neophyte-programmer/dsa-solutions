## LeetCode - Absolute K Diff TS

### Problem Statement

Given an array of integers `nums` and an integer `k`, return the number of pairs `(i, j)` where `i < j` such that `|nums[i] - nums[j]| == k`.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.
 

**Example 1:**

Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
  
**Example 2:**

Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.
Example 3:

Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]


**Problem Source:**  [LeetCode](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/)


## TEST CASES
```javascript
// TEST CASE 1
const nums = [1,2,2,1];
const k = 1;
const output = 4;

// TEST CASE 2
const nums = [1,3];
const k = 3;
const output = 0;

// TEST CASE 3
const nums = [3,2,1,5,4];
const k = 2;
const output = 3;
```
## Time Complexity
**O(n^2)**

## Space Complexity
**O(1)**

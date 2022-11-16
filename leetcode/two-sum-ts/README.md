## LeetCode - Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Problem Source:**  [LeetCode](https://leetcode.com/problems/two-sum/)

**Difficulty:**  Easy

**Tags:**  Array, Hash Table

**Reason for Update:**
The original solution was not the most efficient. I have updated the solution to use a hash table to improve the efficiency.
The time complexity is now O(n) and the space complexity is O(n). The original solution had a time complexity of O(n^2) and a space complexity of O(1).


## TEST CASES
```javascript
// TEST CASE 1
console.log(twoSum([2, 7, 11, 15, 8], 9)) // [0,1]

// TEST CASE 2
console.log(twoSum([3, 2, 4], 6)) // [1,2]

// TEST CASE 3
console.log(twoSum([3,2, 5, 7, 1, 5], 6)) // [2,4]
```
## Time Complexity
**O(n)**

## Space Complexity
**O(n)**

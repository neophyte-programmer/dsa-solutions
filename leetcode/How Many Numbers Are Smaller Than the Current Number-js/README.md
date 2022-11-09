## LeetCode - How Many Numbers Are Smaller Than the Current Number
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

**Problem Source:**  [LeetCode](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)


## TEST CASES
```javascript
// TEST CASE 1
smallerNumbersThanCurrent([8,1,2,2,3]) // [4,0,1,1,3]

// TEST CASE 2
smallerNumbersThanCurrent([6,5,4,8]) // [2,1,0,3]

// TEST CASE 3
smallerNumbersThanCurrent([7,7,7,7]) // [0,0,0,0]
```
## Time Complexity
**O(n)**

## Space Complexity
**O(1)**

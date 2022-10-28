## LeetCode - Two Sum
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Problem Source:**  [LeetCode](https://leetcode.com/problems/add-two-numbers/)


## TEST CASES
```javascript
// TEST CASE 1
console.log(addTwoNumbers([2,4,3], [5,6,4])) // [7,0,8]

// TEST CASE 2
console.log(addTwoNumbers([0], [0])) // [0]

// TEST CASE 3
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])) // [8,9,9,9,0,0,0,1]
```

## Time Complexity
**O(max(m, n))**

## Space Complexity
**O(max(m, n))** 


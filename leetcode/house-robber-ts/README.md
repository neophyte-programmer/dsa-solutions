## LEETCODE - House Robber II - TypeScript

### CHALLENGE

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

### PROBLEM SOURCE

[LeetCode](https://leetcode.com/problems/house-robber-ii/)

### TEST CASES

```javascript
// TEST CASE 1
console.log(rob([2,3,2])) // 3

// TEST CASE 2
console.log(rob([1,2,3])) // 3

// TEST CASE 3
console.log(rob([1, 2, 3, 1])) // 4

```	

### SOLUTION

```javascript
const rob = (nums: number[]): number => {
    // since nums[0] and nums[nums.length - 1] are adjacent, we can't rob both of them
    // so we rob 0 to nums.length - 2 or 1 to nums.length - 1 and take the max
    return Math.max(robRange(nums, 0, nums.length - 2), robRange(nums, 1, nums.length - 1));
}

const robRange = (nums: number[], start: number, end: number): number => {
    let first = nums[start];
    let second = Math.max(nums[start], nums[start + 1]);
    for (let i = start + 2; i <= end; i++) {
        let temp = second;
        second = Math.max(first + nums[i], second);
        first = temp;
    }
    return second;
}
```

### ANALYSIS

#### Time Complexity

**O(n)**

#### Space Complexity

**O(1)**

#### Runtime: 80 ms

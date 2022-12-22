## LEETCODE 643. Maximum Average Subarray I - JavaScript

### Problem

You are given an integer array arr consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

### Example 1

```
Input: arr = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
```

### Example 2

```
Input: arr = [5], k = 1
Output: 5.00000
```

### Constraints

```
n == nums.length
1 <= k <= n <= 105
-104 <= arr[i] <= 104
```

## Problem Source

[LeetCode 643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)

## Solution

```
function findAveragesOfSubarrays(arr, k) {
  //sliding window approach

  const results = []
  let windowSum = 0
  let windowStart = 0

  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    //add the next element
    windowSum += arr[windowEnd]

    //slide the window forward
    //we don't need to slide if we have not hit the required window size of k

    if (windowEnd >= k - 1) {
      //we are **AUTOMATICALLY** returning the window average once we hit the window size of k
      //and pushing to the output array
      results.push(windowSum/k)

      //subtracting the element going out
      windowSum -= arr[windowStart]

      //then sliding the window forward
      windowStart++

      //adding the element coming in, in the outer/previous loop
      //and repeating this process until we hit the end of the array
    }
  }
  return results
}

findAveragesOfSubarrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)//[2.2, 2.8, 2.4, 3.6, 2.8]
```

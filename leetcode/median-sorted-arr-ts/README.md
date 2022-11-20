## LEETCODE 4. Median of Two Sorted Arrays

### Problem

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Follow up: The overall run time complexity should be O(log (m+n)).

### Problem Source
[Leetcode](https://leetcode.com/problems/median-of-two-sorted-arrays/)

### Solution

```typescript
/**
 * 
 * @param nums1 
 * @param nums2 
 * @returns 
 */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = merge(nums1, nums2)
    const mid = Math.floor(merged.length / 2)
    if (merged.length % 2 === 0) {
        return (merged[mid] + merged[mid - 1]) / 2
    }
    return merged[mid]
}

/**
 * 
 * @param nums1 
 * @param nums2 
 * @returns 
 */
function merge(nums1: number[], nums2: number[]): number[] {
    const merged:number[] = []
    let i = 0
    let j = 0
    while (i < nums1.length || j < nums2.length) {
        if (i === nums1.length) {
            merged.push(nums2[j])
            j++
        } else if (j === nums2.length) {
            merged.push(nums1[i])
            i++
        } else if (nums1[i] < nums2[j]) {
            merged.push(nums1[i])
            i++
        } else {
            merged.push(nums2[j])
            j++
        }
    }
    return merged
}

```

### Solution Analysis

Time Complexity: O(n + m)

Space Complexity: O(n + m)



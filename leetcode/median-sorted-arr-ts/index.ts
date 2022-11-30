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

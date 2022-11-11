/**
 * 
 * @param nums: number[]
 * @param target: number
 * @returns result: number[]
 */


// two sums using map
function twoSum(nums: number[], target: number): number[] {
    let map = new Map()
    for ( let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
    return []
}


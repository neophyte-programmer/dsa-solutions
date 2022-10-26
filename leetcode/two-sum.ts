// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * 
 * @param nums: number[]
 * @param target: number
 * @returns result: number[]
 */

function twoSum(nums: number[], target: number): number[] {
    let result:number[] = []
    for ( let i = 0; i < nums.length; i++){
        for ( let j = i + 1; j < nums.length; j++){
            if ( nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return result
};

// test case for twoSum
// TEST CASE 1
console.log(twoSum([2, 7, 11, 15, 8], 9)) // [0,1]

// TEST CASE 2
console.log(twoSum([3, 2, 4], 6)) // [1,2]

// TEST CASE 3
console.log(twoSum([3,2, 5, 7, 1, 5], 6)) // [2,4]
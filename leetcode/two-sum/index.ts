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


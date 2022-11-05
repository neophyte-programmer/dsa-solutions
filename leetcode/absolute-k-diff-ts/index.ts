/**
 * 
 * @param nums : number[]
 * @param k : number
 * @returns  number
 */

function countKDifference(nums: number[], k: number): number {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(Math.abs(nums[i] - nums[j]) == k){
                count++;
            }
        }
    }
    return count;
}
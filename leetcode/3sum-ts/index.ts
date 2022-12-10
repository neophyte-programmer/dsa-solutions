/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets
*/

function threesum(nums: number[]) : number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
}

// Time complexity: O(n^2)
// Space complexity: O(1)
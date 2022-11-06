/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. 
 * All houses at this place are arranged in a circle. 
 * That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, 
 * and it will automatically contact the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 */

const rob = (nums: number[]): number => {
    // if there is only one house, return the money in that house
    if (nums.length === 1) return nums[0];

    // if there are two houses, return the max of the two houses
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
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



var smallerNumbersThanCurrent = function(nums) {
    let count = Array(nums.length).fill(0)
    nums.map(num => {
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > num) {
                count[i]++;
            }
        }
    })
    return count;
};

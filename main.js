// 1752. Check if Array Is Sorted and Rotated



nums = [2,1,3,4]

var check = function (nums) {
    let nonDecreasing = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            nonDecreasing++
            if (nonDecreasing >= 2) {
                return false
            }
        }
    }
    nums[nums.length - 1] > nums[0] && nonDecreasing++
    return nonDecreasing < 2
};

console.log(check(nums))


// 2154. Keep Multiplying Found Values by Two
nums = [5, 3, 6, 1, 12], original = 3
var findFinalValue = function (nums, original) {
    nums.sort((a, b) => a - b)
    for (let num of nums) {
        if (num === original) {
            original *= 2
        }
    }
    return original
};


console.log(findFinalValue(nums, original))

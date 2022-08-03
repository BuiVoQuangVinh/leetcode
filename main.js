const nums = [18, 43, 36, 13, 7]

var sumOfDigits = (num) => {
    let total = 0
    while (num > 0) {
        const temp = num % 10;
        num = Math.floor(num / 10)
        total += temp
    }
    return total
}

var maximumSum = function (nums) {
    let temp = {}
    let result = -1;
    for (let i = 0; i < nums.length; i++) {
        const sumOfDigitsI = sumOfDigits(nums[i])
        if (temp[sumOfDigitsI]) {
            if (result < nums[i] + temp[sumOfDigitsI]) {
                result = nums[i] + temp[sumOfDigitsI]
            }
            if (nums[i] > temp[sumOfDigitsI]) {
                temp = { ...temp, [sumOfDigitsI]: nums[i] }
            }
        }
        else {
            temp = { ...temp, [sumOfDigitsI]: nums[i] }
        }
    }
    return result
}

console.log(maximumSum(nums))
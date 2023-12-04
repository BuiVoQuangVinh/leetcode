// 1005. Maximize Sum Of Array After K Negations

nums = [-4, -2, -3], k = 4

var largestSumAfterKNegations = function (nums, k) {
    const sumArr = (arr) => {
        return arr.reduce((total, current) => total + current, 0)
    }
    let newNums = nums.sort((a, b) => a - b)

    const indexOfZero = newNums.indexOf(0)

    if (newNums[0] >= 0 && k % 2 === 0) {
        return sumArr(newNums)
    }
    else if (newNums[0] >= 0 && k % 2 === 1) {
        newNums[0] *= -1
        return sumArr(newNums)
    }
    else if (newNums[0] < 0 && indexOfZero > 0) {
        let index = 0
        while (index < k && index < indexOfZero) {
            newNums[index] *= -1
            index++
        }
        return sumArr(newNums)
    }

    else {
        for (let i = 0; i < newNums.length; i++) {
            if (newNums[i] < 0) {
                newNums[i] *= -1
                k--
            }
            if (k === 0) {
                return sumArr(newNums)
            }
            if (newNums[i + 1] > 0) {
                if (k % 2 == 0) {
                    return sumArr(newNums)
                }
                else {

                    if (Math.abs(newNums[i]) < Math.abs(newNums[i + 1])) {


                        newNums[i] *= -1
                        return sumArr(newNums)
                    }
                    else {

                        newNums[i + 1] *= -1
                        return sumArr(newNums)
                    }
                }
            }
        }

        if (k > 0 && k % 2 === 0) {
            return sumArr(newNums)
        }
        else {
            newNums[length - 1] *= -1
            return sumArr(newNums)
        }

    }
};

console.log(largestSumAfterKNegations(nums, k))



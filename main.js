// 976. Largest Perimeter Triangle


nums = [3,2,3,4]


var largestPerimeter = function (nums) {
    let perimeter = 0
    let newNums = nums.sort((a, b) => a - b)
    let current = newNums.length - 1
    let right = current - 1
    let left = 0

    console.log(newNums)
    while (1) {
        if (current === 2 && right === 1 && left === 0) {
            if (newNums[current] >= newNums[right] + newNums[left]) {
                return perimeter
            }
            else {
                return newNums[current] + newNums[right] + newNums[left]
            }

        }
        if (newNums[current] >= newNums[right] + newNums[left]) {
            current--
            right = current - 1
            left = right - 1

        }
        if(newNums[current] < newNums[right] + newNums[left] ) {
            perimeter = newNums[current] + newNums[right] + newNums[left]
            return perimeter
        }
    }
    return perimeter
};

console.log(largestPerimeter(nums))

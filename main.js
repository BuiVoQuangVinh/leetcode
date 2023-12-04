// 1446. Consecutive Characters

nums = [3, 4, 5, 2]


// const sortNums = nums.sort((a,b)=>a-b)// o( n*log(n) )
var maxProduct = function (nums) {
    let largest = [0, 0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= largest[0]) {
            largest[1] = largest[0]
            largest[0] = nums[i]
        }
        else {
            if (nums[i] > largest[1]) {
                largest[1] = nums[i]

            }
        }
    }
    return (largest[0] - 1) * (largest[1] - 1)
};


console.log(maxProduct(nums))
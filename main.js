// 53. Maximum Subarray



nums = [5,4,-1,7,8]

var maxSubArray = function (nums) {
    let result = nums[0]
    let temp =[...nums]
    for (let i = 1; i < temp.length; i++) {
        if(temp[i]+temp[i-1] >temp[i]){
            temp[i] = temp[i]+temp[i-1]
        }
        if(temp[i]>result){
            result = temp[i]
        }
    }

    return result
};

console.log(maxSubArray(nums))
console.log(nums)
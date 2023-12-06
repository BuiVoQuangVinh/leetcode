// 2733. Neither Minimum nor Maximum




nums = [3, 2, 1, 4]

var findNonMinOrMax = function (nums) {
    if (nums.length <= 2) {
        return -1
    }
    else {
        if ((nums[0] > nums[1] && nums[0] < nums[2]) || (nums[0] < nums[1] && nums[0] > nums[2])) {
            return nums[0]
        }
        else if ((nums[1] > nums[0] && nums[1] < nums[2]) || (nums[1] < nums[0] && nums[1] > nums[2])) {
            return nums[1]
        }

        else {
            return nums[2]
        }
    }
    // trường hợp nums có element giống nhau
    // if(nums.length <=2){
    //     return -1
    // }
    // const set = new Set(nums.sort((a, b) => a - b))
    // if (set.size <= 2){
    //     return -1
    // }
    // else{
    //     return [...set][1]
    // } 

};

console.log(findNonMinOrMax(nums))
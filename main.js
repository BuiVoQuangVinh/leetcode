// 136. Single Number

nums = [2,2,1,1,3,3,5]

var singleNumber = function(nums) {
    const newNums = nums.sort( (a,b)=>a-b) 
    for(let i = 0;i<newNums.length;i+=2){
        if( newNums[i] !== newNums[i+1] ){
            return newNums[i]
        }
    }

    return -1
};

console.log(singleNumber(nums))
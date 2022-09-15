// 16. 3Sum Closest

nums = [-1,2,1,-4,1,2,2], target = 1

var threeSumClosest = function(nums, target) {
    
    const newNums = nums.sort( (a,b)=>a-b )
    let result = Number.MAX_SAFE_INTEGER
    for(let i=0;i<nums.length-2;i++){
        let left = i+1
        let right = nums.length -1
        while(left < right){
            if(  Math.abs(target -result )    >  Math.abs(target - newNums[i] - newNums[left] - newNums[right] )){
                result = newNums[i]+newNums[left]+newNums[right]
                if(newNums[i]+newNums[left]+newNums[right] === target ){
                    return result
                }
            }   
            else if( newNums[i]+newNums[left]+newNums[right] > target){
                right --
            }
            else{
                left++
            }
        }
    }

    return result

};

console.log(threeSumClosest(nums,target))
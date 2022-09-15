// 15. 3Sum

nums = [-2,0,1,1,2]

var threeSum = function(nums) {
        const newNums = nums.sort( (a,b)=>a-b  )
        const result = []
        for(let i = 0;i < newNums.length -2;i++){
            let left  = i+1;
            let right = newNums.length -1;
            while( left < right){
                if( newNums[left] + newNums[right]+newNums[i] === 0){
                    let isValid = true
                    for (let arr of result ){
                        if ( arr[0]=== newNums[i] && arr[1]=== newNums[left]&&arr[2]===newNums[right]){
                            isValid = false
                        }

                    }
                    if(isValid){
                        result.push( [  newNums[i],newNums[left],newNums[right]])
                        right --
                    }
                    else{
                        right --
                    }
                }

                else if( newNums[left] + newNums[right]+newNums[i] > 0){
                    right --
                }
                else {
                    left++
                }
            }
        }
        return result
};

console.log(threeSum(nums))


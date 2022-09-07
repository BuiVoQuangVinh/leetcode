// 11. Container With Most Water

height = [1,8,6,2,5,4,8,3,7]


var maxArea = function(height) {
    let result = -1
    let right = height.length -1 
    let left = 0

    while (left< right){
        const current = (right-left)*Math.min(height[right],height[left])

        if (result < current){
            result = current
        }

        if(height[left] < height[right]){
            left ++
        }
        else{
            right --
        }
    }
    return result

};

console.log(maxArea(height))
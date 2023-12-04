//496. Next Greater Element I


nums1 = [2,4], nums2 = [1,2,3,4]

var nextGreaterElement = function (nums1, nums2) {
    let result = []
    nums1.map((value,index) => {
        let point = nums2.indexOf(value)
        for (let i = point; i < nums2.length; i++) {
            if (nums2[i] > value) {
                result.push(nums2[i])
                break
            }
     
        }
        if(!result[index]){
            result.push(-1)
        }
    })
    return result
};


console.log(nextGreaterElement(nums1, nums2))



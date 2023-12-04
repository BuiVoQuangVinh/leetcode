//349. Intersection of Two Arrays


nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]

var intersection2 = function (nums1, nums2) {
    const result = new Set()

    nums1.map((value) => {
        if (nums2.indexOf(value) >= 0) {
            result.add(value)
        }
    })
    return [...result]
};


console.log(intersection2(nums1, nums2))



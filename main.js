// 165. Compare Version Numbers


version1 = "1.0.1", version2 = "1"

var compareVersion = function (version1, version2) {
    const arr1 = Array.from(version1.split('.'), Number)
    const arr2 = Array.from(version2.split('.'), Number)
    let i = 0
    console.log({arr1,arr2})
    while (arr1[i]>=0 || arr2[i]>=0) {
        if (arr1[i] < arr2[i]) {
            return -1
        } else if (arr1[i] > arr2[i]) {
            return 1
        } else if (arr1[i] === undefined) {
            if (arr2[i] !== 0) {
                return -1
            }
        } else if (arr2[i] === undefined) {
            if (arr1[i] !== 0) {
                return 1
            }
        }
        i++
        console.log({i})
    }
    return 0
};

console.log(compareVersion(version1,version2))
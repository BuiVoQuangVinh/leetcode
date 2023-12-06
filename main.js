// 1684. Count the Number of Consistent Strings


allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]

var countConsistentStrings = function (allowed, words) {
    // const hashMap = {}
    // for (let i = 0; i < allowed.length; i++) {
    //     if (!hashMap[allowed[i]]) {
    //         hashMap[allowed[i]] = 1
    //     }
    // }
    // let result = 0
    // for (let word of words) {
    //     let flag = true
    //     for (let char of word) {
    //         if (!hashMap[char]) {
    //             flag = false
    //             break
    //         }
    //     }
    //     if (flag) {
    //         result++
    //     }
    // }
    // return result
    let result = 0
    for (let word of words) {
        let flag = true
        for (let char of word) {
            if (allowed.indexOf(char) < 0) {
                flag = false
                break
            }
        }
        if(flag){
            result++
        }
    }
    return result
};

console.log(countConsistentStrings(allowed, words))
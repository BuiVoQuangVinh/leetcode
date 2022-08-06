
// 392. Is Subsequence

const num = 30

s = "", t = "ahbgdc"

var isSubsequence = function (s, t) {
    const sLength = s.length
    if (sLength === 0) {
        return true
    }
    const tLength = t.length
    if (sLength !== 0 && t.length === 0) {
        return false
    }
    let i = 0
    let j = 0
    while (i < sLength && j < tLength) {
        if (s[i] === t[j]) {
            if (i === sLength - 1) {
                return true
            }
            i++;
            j++
        }
        else {
            j++
        }
    }

    return false
};

console.log(isSubsequence(s, t))
// 1446. Consecutive Characters

s = "leetcode"

var maxPower = function (s) {
    let result = 1
    let count = 1
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++
            if (count > result) {
                result = count

            }
        }
        else {
            count = 1
        }

    }

    return result
};


console.log(maxPower(s))
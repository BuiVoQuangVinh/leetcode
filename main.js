// 3. Longest Substring Without Repeating Characters

s = "au"


var lengthOfLongestSubstring = function (s) {
    let result = 0;
    let temp = [s[0]]
    for (let i = 1; i < s.length; i++) {
        const findIndex = temp.findIndex(value => value == s[i])
        if (findIndex === -1) {
            temp.push(s[i])
        }
        else {
            if (result < temp.length) {
                result = temp.length
            }
            temp.splice(0, findIndex + 1)
            temp.push(s[i])
        }
    }

    if (temp.length >result){
        return temp.length
    }

    return result
};


console.log('1', lengthOfLongestSubstring(s))
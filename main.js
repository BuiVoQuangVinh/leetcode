// 459. Repeated Substring Pattern


s = "aabaaba"

var repeatedSubstringPattern = function (s) {
    const lengthRepeated = []
    for (let i = 1; i <= s.length / 2; i++) {
        if (s[0] === s[i]) {
            lengthRepeated.push(i)
        }
    }

    if (lengthRepeated.length === 0) {
        return false;
    }

    for (let i = 0; i < lengthRepeated.length; i++) {
        let length = lengthRepeated[i]
        let start = 0;
        let end = length;
        const temp = s.slice(start, end)
        for (let j = 0; j < s.length; j += length) {
            start += length
            end += length
            if (temp !== s.slice(start, end)) {
                break
            }

            console.log({ end, length });

            if (end >= s.length) {
                return true
            }
        }
    }
    return false

};

console.log(repeatedSubstringPattern(s));
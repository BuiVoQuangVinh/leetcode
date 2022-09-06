// 6. Zigzag Conversion

s = "PAYPALISHIRING", numRows = 3

var convert = function (s, numRows) {
    if (numRows === 1) {
        return s
    }
    let result = ''
    const lengthCycle = numRows * 2 - 2
    for (let i = 0; i < numRows; i++) {
        const isFisrtRow = (i === 0)
        const isLastRow = (i === numRows - 1)
        for (let j = 0; j + i < s.length; j += lengthCycle) {
            result += s[i + j]

            if (!isFisrtRow && !isLastRow && s[i + j + lengthCycle - 2 * i]) {
                result += s[i + j + lengthCycle - 2 * i]
            }
        }
    }
    return result
};

console.log(convert(s, numRows))
console.log(convert(s, numRows) === `PAHNAPLSIIGYIR`)


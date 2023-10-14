// 492. Construct the Rectangle

code = [2, 4, 9, 3], k = -2

var decrypt = function (code, k) {
    if (k === 0) {

        return new Array(code.length).fill(0)
    }
    let result = []
    const length = code.length
    if (k > 0) {
        for (let i = 0; i < length; i++) {
            let temp = 0

            for (let j = 1; j <= k; j++) {
                temp += code[(i + j) % length]
            }
            result[i] = temp
        }
        return result
    }

    else {
        for (let i = 0; i < length; i++) {
            let temp = 0
            for (let j = -1; j >= k; j--) {
                if (i + j >= 0) {
                    temp += code[i + j]
                }
                else {
                    temp += code[length + i + j]
                }

            }
            result[i] = temp
        }
        return result
    }


};

console.log(decrypt(code, k));
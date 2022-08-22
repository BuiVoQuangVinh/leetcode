// 844. Backspace String Compare

const [s, t] = [
    "xywrrmp",
    "x#####ywrrmup"]


var backspaceCompare = function (s, t) {
    var backspaceDelete = function (s) {
        const arr1 = s.split('')
        let del1 = 0
        let length = arr1.length
        for (let i = 0; i < length; i++) {
            if (arr1[i] === '#') {
                if (i === 0) {
                    arr1.splice(i, 1)
                }
                else {
                    del1++
                }
            }
            else {
                if (del1) {
                    const start = i - del1 * 2 > 0 ? i - del1 * 2 : 0
                    arr1.splice(start, i - start)
                    del1 = 0
                    i = 0
                }
                else if (arr1[i] === undefined) {
                    break
                }
            }
        }
        if (del1) {
            if (length - del1 * 2 > 0) {
                const start = length - del1 * 2
                arr1.splice(start, del1 * 2)
            }
            else {
                return []
            }

        }
        return arr1
    }

    const arr1 = backspaceDelete(s)
    const arr2 = backspaceDelete(t)

    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
};

console.log(backspaceCompare(s, t))
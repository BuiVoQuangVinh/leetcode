// 844. Backspace String Compare

const [s, t] = [
    "x#####ywrrmp",
    "x#####ywrrmup"]


var backspaceCompare = function (s, t) {
    var handleBackspace = function (str) {
        const arr = []
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '#') {
                arr.pop()
            }
            else {
                arr.push(str[i])
            }
        }
        return arr
    }

    const arrS = handleBackspace(s)
    const arrT = handleBackspace(t)

    if (arrS.length !== arrT.length) {
        return false
    }

    for (let i = 0; i < arrS.length; i++) {
        if (arrS[i] !== arrT[i]) {
            return false
        }
    }

    return true
};

console.log(backspaceCompare(s, t))
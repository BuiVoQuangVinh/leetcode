// 387. First Unique Character in a String
const s = "lovel eetco de"

var firstUniqChar = function (s) {
    const arrFromS = Array.from(s)
    const hashTable = arrFromS.reduce((obj, currentValue) => {
        if (obj[currentValue]) {
            return { ...obj, [currentValue]: obj[currentValue] + 1 }
        }
        else {

            return { ...obj, [currentValue]: 1 }
        }
    }, {})
    for (let i = 0; i < arrFromS.length; i++) {
        if (hashTable[arrFromS[i]] === 1) {
            return i
        }
    }
    return -1
};

console.log(firstUniqChar(s))
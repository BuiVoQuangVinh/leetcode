// 383. Ransom Note
ransomNote = "abc", magazine = "b"


var canConstruct = function (ransomNote, magazine) {
    const countString = (str) => {
        const obj = {}
        for (let i = 0; i < str.length; i++) {
            if (!obj[str[i]]) {
                obj[str[i]] = 1
            }
            else {
                obj[str[i]] += 1
            }
        }
        return obj
    }
    const objRansomNot = countString(ransomNote)
    const objMagazine = countString(magazine)

    for (let key in objRansomNot) {
        if (objRansomNot[key] > objMagazine[key]) {
            return false
        }
        else if (objRansomNot[key]) {
            if (!objMagazine[key]){
                return false
            }
        }
    }
    return true



};

console.log(canConstruct(ransomNote, magazine))


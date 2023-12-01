// 819. Most Common Word

paragraph = "a, a, a, a, b,b,b,c, c", banned = ["a"]

var mostCommonWord = function (paragraph, banned) {
    let count = 0
    const temp = paragraph.replace(/[^\w\s]/gi,' ').toLowerCase().split(" ")
    const obj = {}
    let word = ''
    console.log(temp)
    for (let i = 0; i < temp.length; i++) {
        if (banned.includes(temp[i]) || temp[i] == '') {
        }
        else if (!obj[temp[i]]) {
            obj[temp[i]] = 1
            if (obj[temp[i]] > count) {
                count = obj[temp[i]]
                word = temp[i]
            }
        }
        else {
            obj[temp[i]] += 1
            if (obj[temp[i]] > count) {
                count = obj[temp[i]]
                word = temp[i]
            }
        }
    }
    return {word,count}
};

console.log(mostCommonWord(paragraph, banned))

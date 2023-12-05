//1688. Count of Matches in Tournament


words = ["cat", "bt", "hat", "tree"], chars = "atach"

var countCharacters = function (words, chars) {
    const obj = {}
    let result = 0
    for (let i = 0; i < chars.length; i++) {
        if (!obj[chars[i]]) {
            obj[chars[i]] = 1
        }
        else {
            obj[chars[i]] += 1

        }
    }
    words.map((word) => {
        let temp = {...obj}
        let flat = true
        for (let i = 0; i < word.length; i++) {
            if (!temp[word[i]] || temp[word[i]] < 0) {
                flat = false
                break
            }
            else {
                temp[word[i]]--
                if (temp[word[i]] < 0) {
                    flat = false
                    break
                }
            }
        }
        if(flat){
            result+=word.length
        }
    })
    return result
};

console.log(countCharacters(words, chars))

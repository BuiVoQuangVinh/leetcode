// 1662. Check If Two String Arrays are Equivalent.


word1 = ["ab", "c"], word2 = ["a", "bc"]

var arrayStringsAreEqual = function (word1, word2) {
    const str1 = word1.reduce((initialStr, word) => {
        return initialStr + word
    }, "")

    const str2 = word2.reduce((initialStr, word) => {
        return initialStr + word
    }, "")

    return str1 === str2
};


console.log(arrayStringsAreEqual(word1, word2))
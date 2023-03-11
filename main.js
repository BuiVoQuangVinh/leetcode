// 1662. Check If Two String Arrays are Equivalent

word1  = ["fvnzyxfmvtsezl"], word2 = ["abcddefg"]

var arrayStringsAreEqual = function(word1, word2) {
    
    const length = word1.length > word2.length ? word1.length : word2.length
    let w1 = ''
    let w2 = ''

    for (let i = 0;i <length;i++){
        w1 +=word1[i]||''
        w2 +=word2[i]||''
    }
    

    console.log(w1,w2)

    return w1 === w2
};

console.log(arrayStringsAreEqual(word1,word2))
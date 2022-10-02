// 1816. Truncate Sentence
s = "chopper is not a tanuki", k = 5


var truncateSentence = function(s, k) {
    const arr = s.split(" ")
    let result = arr[0]
    for(let i =1;i<k;i++){
        result +=" "+arr[i]
    }
    return result
};  

console.log(truncateSentence(s,k))
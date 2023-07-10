// 884. Uncommon Words from Two Sentences


var uncommonFromSentences = function (s1, s2) {
    let arr = [...s1.split(" "), ...s2.split(" ")]
    let duplicate = []
    for(let i=0;i<arr.length - 1;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                duplicate.push(arr[i])
            }
        }
    }
    return arr.filter(val => !duplicate.includes(val))


};

s1 = "this apple is sweet", s2 = "this apple is sour"

console.log(uncommonFromSentences(s1, s2));
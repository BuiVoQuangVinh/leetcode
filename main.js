// 1668. Maximum Repeating Substring

sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba", word = "aaaba"
//  = "aaabaaaab aaaba aaaba aaaba aaaba aaaba"


var maxRepeating = function (sequence, word) {
    let result = 0
    let temp = 0
    for (let i = 0; i < sequence.length; i++) {
        console.log({ result,i })
        if (sequence[i] === word[0]) {
            for (let j = 0; j < word.length; j++) {
                if (sequence[i + j] !== word[j]) {
                    if (temp > result) {
                        result = temp
                    }
                    i -= word.length * temp
                    temp = 0
                    break;
                }
                else {
                    if (j === word.length - 1) {
                        temp++
                        i += j
                    }
                }
            }
        }
        else {
            if (temp > result) {
                result = temp
            }
            i -= word.length * temp
            temp = 0
        }


    }
    return result > temp ? result : temp;
};


console.log(maxRepeating(sequence, word))
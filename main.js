// 2264. Largest 3-Same-Digit Number in String
const num = "677133339"

var largestGoodInteger = function (num) {
    let result = ""
    let count = 1
    for (let i = 1; i < num.length; i++) {
        console.log({i:i,num:num[i]})
        if (num[i-1] === num[i]) {
            count++
            if (count >= 3 && result < num[i]) {
                result = num[i]
            }
        }
        else {
            count = 1
        }
    }
    return `${result}${result}${result}`
};


console.log(largestGoodInteger(num))


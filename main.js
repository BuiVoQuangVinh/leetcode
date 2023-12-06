// 1742. Maximum Number of Balls in a Box


lowLimit = 1, highLimit = 10

var countBalls = function (lowLimit, highLimit) {
    let largest = 0
    let boxNumber = Array(56).fill(0)
    for (let i = lowLimit; i <= highLimit; i++) {
        let current = 0;
        let temp = i
        while (temp > 0) {
            current += temp % 10
            temp = Math.floor(temp/10)
        }
        boxNumber[current]++
        if( boxNumber[current] > largest ){
            largest = boxNumber[current]
        }
    }
    return largest
};

console.log(countBalls(lowLimit, highLimit))
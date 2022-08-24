left = 1, right = 22

var selfDividingNumbers = function (left, right) {
    const result = []
    const isDividingNumbers = (num) => {
        let temp = num
        while (temp >= 1) {
            if (num % (temp % 10) !== 0) {
                return false
            }
            temp = Math.floor(temp / 10)
        }
        return true
    }

    while (left <= right) {
        if (isDividingNumbers(left)){
            result.push(left)
        }
        left++
    }

    return result

};



console.log(selfDividingNumbers(left, right))


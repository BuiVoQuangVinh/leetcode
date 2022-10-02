// 1404. Number of Steps to Reduce a Number in Binary Representation to One
s = '1111011110000011100000110001011011110010111001010111110001'


var numSteps = function (s) {

    let num = BigInt(`0b${s}`)

    let steps = 0
    while (num != 1n) {
        if (num % 2n === 1n) {
            num += 1n
            steps += 1
        }
        else {
            num = num / 2n
            steps += 1
        }
    }
    return steps
};

console.log(numSteps(s))
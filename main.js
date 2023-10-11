// 492. Construct the Rectangle

area = 122122

var constructRectangle = function (area) {
    let a = area
    let b = 1
    let difference = area - 1

    for (let i = 2; i <= area / 2; i++) {
        if (((area / i) % 1 === 0) && ((area / i) - i < difference) && (area / i) - i >= 0) {
            a = area / i
            b = i
            difference = a - b
        }
    }

    return a - b > 0 ? [a, b] : [b, a]
};

console.log(constructRectangle(area));
// 2483. Minimum Penalty for a Shop

customers = "YYNY"

var bestClosingTime = function (customers) {
    let penalty = 0
    for (let customer of customers) {
        if (customer == 'Y') {
            penalty++
        }
    }
    let current = penalty
    let result = [0, current]

    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === 'Y') {
            current--
        }
        else {
            current++
        }

        if (current < result[1]) {
            result[1] = current
            result[0] = i + 1
        }
    }
    return result[0]
};


console.log(bestClosingTime(customers))
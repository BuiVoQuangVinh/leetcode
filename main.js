// 1716. Calculate Money in Leetcode Bank

n = 20

var totalMoney = function (n) {
    let total = 0
    let weeks = Math.floor(n / 7)
    let days = n - 7 * weeks

    for (let i = 0; i < weeks; i++) {
        total = total + 28 + 7 * i
    }

    for (let i = 1; i <= days; i++) {
        total = total + i + weeks
    }

    return total
};


console.log(totalMoney(n))

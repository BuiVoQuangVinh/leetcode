// 2144. Minimum Cost of Buying Candies With Discount

cost = [5,5]

var minimumCost = function (cost) {
    let sortCost = cost.sort((a, b) => b - a)
    let result = 0
    for (let i = 0; i < sortCost.length; i++) {
        if ((i + 1 )% 3 !== 0) {
            result += sortCost[i]
        }
    }
    return result
};

console.log(minimumCost(cost));
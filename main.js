// 121. Best Time to Buy and Sell Stock
prices = [7, 1, 5, 3, 6, 4]

var maxProfit = function (prices) {
    let profit = 0
    let buy = prices[0]
    let sell = prices[0]
    for (let i = 1; i < prices.length; i++) {

        if (sell < prices[i]) {
            sell = prices[i]
            if (profit < sell - buy) {
                profit = sell - buy
            }
        }

        if (buy > prices[i]) {
            buy = prices[i]
            sell = prices[i]
        }

    }
    return profit
};

console.log(maxProfit(prices))
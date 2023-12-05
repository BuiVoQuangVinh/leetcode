// 1561.Maximum Number of Coins You Can Get

piles = [2,4,1,2,7,8]
var maxCoins = function (piles) {
    piles.sort((a, b) => a - b)

    let result = 0
    let loop = piles.length / 3
    let current = piles.length - 2

    while (loop) {
        result += piles[current]
        current -= 2
        loop--
    }
    return result
    // let right = piles.length - 1
    // let left = 0
    // let result = {
    //     alice: 0,
    //     you: 0,
    //     bob: 0,
    // }
    // while (true) {
    //     result.alice += piles[right]
    //     right--
    //     if (right === left) {
    //         break
    //     }
    //     result.you += piles[right]
    //     right--
    //     if (right === left) {
    //         break
    //     }
    //     result.bob += piles[left]
    //     left++
    //     if (right === left) {
    //         break
    //     }
    // }
    // return result.you
};


console.log(maxCoins(piles))
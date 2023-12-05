// 1492. The kth Factor of n
n = 12, k = 3

var kthFactor = function (n, k) {
    const factorInteger = []
   
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factorInteger.push(i)

            if (factorInteger.length === k ) {
                console.log(factorInteger)
                return factorInteger[k - 1]
            }
        }
    }

    return -1


};

console.log(kthFactor(n, k))
//  509. Fibonacci Number


n = 10

var fib = function (n) {

    if (n == 0) {
        return 0
    }

    if (n == 1) {
        return 1
    }

    let result = 0
    let f0 = 0
    let f1 = 1

    for (let i = 0; i < n; i++) {
        result = f0 + f1
        f1 = f0
        f0 = result
    }


    // let result = 1
    // let f0 = 0

    // for (let i = 0; i < n - 1; i++) {
    //     let temp = result
    //     result += f0
    //     f0 = temp
    // }

    return result;
};


console.log(fib(n));
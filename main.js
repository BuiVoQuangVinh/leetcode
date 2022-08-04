
// 1317. Convert Integer to the Sum of Two No-Zero Integers

const n = 1501

var getNoZeroIntegers = function (n) {
    const result = [0, 0]
    if (n >= 1000) {
        result[0] = n - 999
        result[1] = 999
    } else if (n >= 100) {
        result[0] = n - 99
        result[1] = 99
    } else if (n >= 10) {
        result[0] = n - 9
        result[1] = 9
    }
    else {
        result[0] = n - 1
        result[1] = 1
        return result
    }

    // Kiểm tra xem trong arr[0] và arr[1] có chứa số 0 hay không.
    while (result[0].toString().split('').findIndex(value => value === '0') !== -1 || result[1].toString().split('').findIndex(value => value === '0') !== -1) {
        result[0]++
        result[1]--
    }

    return result

};

console.log(getNoZeroIntegers(n))
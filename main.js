// 2437. Number of Valid Clock Times
time = "??:2?"

var countTime = function(time) {
    let result = 1;
    const temp = time.split("")

    // hours
    if (temp[0] === '?' && temp[1] === '?') {
        result *= 24
    }

    else if (temp[0] === '?' && Number(temp[1],Number) >=4) {
        result *= 2
    }
    else if (temp[0] === '?') {
        result *= 3
    }
    else if (temp[0] === '2' && temp[1] === '?') {
        result *= 4
    }
    else if (temp[1] === '?') {
        result *= 10
    }

    // minutes
    if (temp[3] === '?' && temp[4] === '?') {
        result *= 60
    }

    else if (temp[3] === '?') {
        result *= 6
    }
    else if (temp[4] === '?') {
        result *= 10
    }

    return result
};


console.log(countTime(time))
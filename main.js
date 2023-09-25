//  1945. Sum of Digits of String After Convert

s = "zbax"
k = 3

var getLucky = function (s, k) {
    let result = 0
    let convert = ''
    const ASCII = 96
    // convert
    for (let i = 0; i < s.length; i++) {
        convert += `${s[i].charCodeAt(0) - ASCII}`
    }


    console.log({ convert });
    // transform
    for (let i = 0; i < k; i++) {
        result = 0
        for (let j = 0; j < convert.length; j++) {
            result += parseInt(convert[j])
        }
        convert = `${result}`
    }

    return result

};

console.log(getLucky(s, k));
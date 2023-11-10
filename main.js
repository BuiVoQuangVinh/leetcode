// // 448. Find All Numbers Disappeared in an Array




// 2384. Largest Palindromic Number
// num = '4449471379'
num = '6006'


var largestPalindromic = function (num) {
    if(parseInt(num) ===0){
        return '0'
    }

    const obj = {}
    even = []
    odd = -1
    for (let i = 0; i < num.length; i++) {
        if (!obj[num[i]]) {
            obj[num[i]] = 1
        }
        else {
            obj[num[i]] += 1
        }
    }


    for (let key in obj) {
        if (obj[key] % 2 === 0) {
            while (obj[key] > 0) {
                even.push(parseInt(key))
                obj[key] -= 2
            }
        }
        else {
            if (odd < parseInt(key)) {
                odd = parseInt(key)
            }
            if (obj[key] > 1) {
                while (obj[key] > 1) {
                    even.push(parseInt(key))
                    obj[key] -= 2
                }
            }
     

        }
    }


    even.sort((a, b) => b - a)
    if(even[0] === even[even.length -1] && even[0] ===0 ){
        return`${odd}`
    }


    let result = '';
    for (let i = 0; i < even.length; i++) {
        result += `${even[i]}`
    }

    if(odd >=0){
        result += `${odd}`
    }

    for (let i = even.length - 1; i >= 0; i--) {
        result += `${even[i]}`
    }

    return result
};

console.log(largestPalindromic(num));
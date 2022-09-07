// 12. Integer to Roman

num = 1994

var intToRoman = function (num) {
    // const hashTable = {
    //     1: 'I',
    //     4: 'IV',
    //     5: 'V',
    //     9: 'IX',
    //     10: 'X',
    //     40: 'XL',
    //     50: 'L',
    //     90: 'XC',
    //     100: 'C',
    //     400: 'CD',
    //     500: 'D',
    //     900: 'CM',
    //     1000: 'M',
    // }
    let result = ''
    while (num) {
        if (num >= 1000) {
            const step = Math.floor(num / 1000)
            for (let i = 0; i < step; i++) {
                result += 'M'
                num-=1000
            }
        }

        else if (num >= 100) {
            if (num >= 900) {
                result += 'CM'
                num -= 900
               
            }
            else if (num >= 500) {
                result += 'D'
                num -= 500
            }

            else if (num >= 400) {
                result += 'CD'
                num -= 400
            }
            const step = Math.floor(num / 100)
            for (let i = 0; i < step; i++) {
                result += 'C'
                num-=100
            }

        }

        else if (num >= 10) {
            if (num >= 90) {
                result += 'XC'
                num -= 90
            }

            else if (num >= 50) {
                result += 'L'
                num -= 50
            }

            else if (num >= 40) {
                result += 'XL'
                num -= 40
            }

            const step = Math.floor(num / 10)
            for (let i = 0; i < step; i++) {
                result += 'X'
                num-=10
            }

        }

        else  {
            if (num >= 9) {
                result += 'IX'
                num -= 9
            }

            else if (num >= 5) {
                result += 'V'
                num -= 5
            }

            else if (num >= 4) {
                result += 'IV'
                num -= 4
            }

            const step = Math.floor(num / 1)
            for (let i = 0; i < step; i++) {
                result += 'I'
                num-=1
            }

        }
    }

    return result
};

console.log(intToRoman(num))


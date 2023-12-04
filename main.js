//507. Perfect Number


num = 99999995

var checkPerfectNumber = function (num) {
    let total = 0
    for (let i = Math.floor(num / 2); i >0; i--) {
        if (num % i === 0) {
            total += i 
            if(total  > num){
              return false
            }
        }     
    }
    return total === num
};

console.log(checkPerfectNumber(num))



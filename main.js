// 258. Add Digits

const num = 19999
var addDigits = function (num) {
    let sum = 0
    if (num <=9){
        return num
    }

   while (num >=10) {
    while (num > 0) {
        sum = sum + num % 10
        num = Math.floor(num / 10)   
    }

    if(sum >= 10){
        num = sum
        sum = 0;
    }

   }

   return sum


};

console.log(addDigits(num))
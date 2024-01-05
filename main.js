// 504. Base 7

var convertToBase7 = function (num) {
  let result = ""

  if (num == 0) {
    return '0'
  }
  else if (num > 0) {
    while (num > 0) {
      const temp = num % 7;
      result =temp+result;
      num = (num - temp) / 7;
    }

    return result;
  }
  else {
    num *= -1
    while (num > 0) {
      const temp = num % 7;
      result = temp+result;
      num = (num - temp) / 7;
    }
    return `-${result}`;
  }
};

num = 565
console.log(convertToBase7(num))

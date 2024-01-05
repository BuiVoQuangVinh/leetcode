// 504. Base 7

var convertToBase7 = function (num) {
  const result = []
  let numberBase7 = 0
  if (num == 0) {
    return '0'
  }
  else if (num > 0) {
    while (num > 0) {
      const temp = num % 7;
      result.push(temp)
      num = (num - temp) / 7;
    }
    while (result.length > 0) {
      numberBase7 = numberBase7 * 10 + result.pop();
    }
    return `${numberBase7}`;
  }
  else {
    num *= -1
    while (num > 0) {
      const temp = num % 7;
      result.push(temp)
      num = (num - temp) / 7;
    }
    while (result.length > 0) {
      numberBase7 = numberBase7 * 10 + result.pop();
    }
    return `${numberBase7*(-1)}`;
  }
};

num = -565
console.log(convertToBase7(num))

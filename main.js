// 2283. Check if Number Has Equal Digit Count and Digit Value


var digitCount = function (num) {
  const arr = new Array(10).fill(0);
  if (num.length == 1) {
    return false
  }
  for (let n of num) {

    arr[+n] += 1;
  }

  console.log(arr);
  for (let i = 0; i < num.length; i++) {
    arr[i] -= num[i];
  }

  console.log(arr);
  for (let n of arr) {
    if (n != 0) {
      return false
    }
  }
  return true;

};


const num = "6210001000";
console.log(digitCount(num));

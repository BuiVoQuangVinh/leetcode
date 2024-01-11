// 1262. Greatest Sum Divisible by Three

var maxSumDivThree = function (nums) {
  if (nums.length === 1) {
    if (nums[0] % 3 === 0) {
      return nums[0]
    }
    else {
      return 0;
    }
  }

  let total = nums.reduce((total, value) => {
    total += value;
    return total;
  }, 0)


  const newNums = nums.sort((a, b) => a - b)
  if (total % 3 === 0) {
    return total
  }
  let result = 0
  let surplus = total % 3
  let point = newNums.length;

  for (let num of newNums) {
    if (num % 3 === surplus) {
      result = total - num;
      point = num
      break
    }
  }

  let isLoop = true
  if (newNums.length > 2) {
    for (let i = 0; i < newNums.length - 1; i++) {
      for (let j = i + 1; j < newNums.length; j++) {
        if( newNums[i] + newNums[0] >= point){
          isLoop = false;
        }
        if ((newNums[i] + newNums[j]) % 3 === surplus) {
          result = Math.max(total - newNums[i] - newNums[j], result)
          point = (newNums[i] + newNums[j]);
        }
        if ((newNums[i] + newNums[j]) >= point) {
          break
        }
      }
      if(!isLoop){
        break;
      }
    }
  }
  return result;
};
// // { i: 263, j: 716 }
nums = [366, 809, 6, 792, 822, 181, 210, 588, 344, 618, 341, 410, 121, 864, 191, 749, 637, 169, 123, 472, 358, 908, 235, 914, 322, 946, 738, 754, 908, 272, 267, 326, 587, 267, 803, 281, 586, 707, 94, 627, 724, 469, 568, 57, 103, 984, 787, 552, 14, 545, 866, 494, 263, 157, 479, 823, 835, 100, 495, 773, 729, 921, 348, 871, 91, 386, 183, 979, 716, 806, 639, 290, 612, 322, 289, 910, 484, 300, 195, 546, 499, 213, 8, 623, 490, 473, 603, 721, 793, 418, 551, 331, 598, 670, 960, 483, 154, 317, 834, 352]


console.log(maxSumDivThree(nums))

// console.log( nums.sort( (a,b)=>a-b ))

// console.log(50509 - 50487)

// console.log(50487 %3)
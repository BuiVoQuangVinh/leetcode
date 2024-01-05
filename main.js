// 594. Longest Harmonious Subsequence

var findLHS = function (nums) {
  let result = 0;
  const obj = {};
  for (let num of nums) {
    if (obj[num]) {
      obj[num]++
    } else {
      obj[num] = 1
    }
  }

  for (let num of nums) {
    if (obj[num + 1]) {
      result = Math.max((obj[num + 1] + obj[num]), result)
    }
  }

  return result



  // for (let i = 0; i < nums.length - 1; i++) {
  //   const tempArr = [nums[i]];
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (Math.abs(tempArr[0] - nums[j]) <= 1) {
  //       const temp = new Set(tempArr)
  //       if (temp.size <= 2 && temp.has(nums[j])) {
  //         tempArr.push(nums[j])
  //       }
  //       else if (temp.size == 1 && !temp.has(nums[j])) {
  //         tempArr.push(nums[j])
  //       }

  //     }
  //   }
  //   console.log(tempArr)
  //   const set = new Set(tempArr)
  //   if (set.size == 2) {
  //     max = Math.max(max, tempArr.length);
  //   }
  // }
  // return max;

  // while (current < nums.length) {
  //   if (Math.abs(nums[index] - nums[current]) == 1 && Math.abs(nums[index] - nums[index - 1]) <= 1) {
  //     index++;
  //     temp++;
  //     if (index > nums.length) {
  //       max = Math.max(max, temp);
  //       break;
  //     }

  //   }

  //   else {
  //     current = index;
  //     index = current + 1;
  //     max = Math.max(max, temp);
  //     temp = 0;
  //   }

  // }
  // return max;
};

nums = [2, 2, 2, 2, 2, 2, 2, 3, 1, 0, 0, 0, 3, 1, -1, 0, 1, 1, 0, 0, 1, 1, 2, 2, 2, 0, 1, 2, 2, 3, 2]
console.log(findLHS(nums))
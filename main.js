// 2210. Count Hills and Valleys in an Array
var countHillValley = function (nums) {
  let result = 0;

  let idx = 1;
  let n = nums.length;


  while (idx < n) {
    let temp = idx + 1;
    while (nums[temp] == nums[idx]) {
      temp++;
    }
    console.log({ idx: nums[idx], temp: nums[temp] })
    let left = nums[idx] - nums[idx - 1];
    let right = nums[idx] - nums[temp];

    if ((left < 0 && right < 0) || left > 0 && right > 0) {
      result++;

    }
    idx = temp;

  }
  return result;

};



nums = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];

console.log(countHillValley(nums));

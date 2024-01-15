// 2574. Left and Right Sum Differences

var leftRightDifference = function (nums) {
  const result = [];
  const total = nums.reduce((sum, value) => {
    return sum + value;
  }, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let rightSum = total - nums[i] - leftSum;
    result.push(Math.abs(rightSum - leftSum));
    leftSum += nums[i];
  }
  return result;
};



nums = [10, 4, 8, 3]

leftRightDifference(nums);
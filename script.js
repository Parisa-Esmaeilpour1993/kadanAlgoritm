function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let num of arr) {
    currentSum = Math.max(0, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

let arr = [1, 3, 5, 18, -2, 6, -1, 0, 20, -5];

console.log(getMaxSubSum(arr));

/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (map[num] != null) {
            return [map[num], i];
        }

        map[complement] = i;
    }
};

const test = () => {
  const nums = [2, 7, 11, 15];
  const target = 9;

  const result = twoSum(nums, target);
  console.log(result); // [0, 1]
};


/**
 * Given a non-empty array of integers, return the k most frequent elements.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    if (nums.length === 0) return [];
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = !map[nums[i]] ? 1 : map[nums[i]] + 1;
    }
    return Object.keys(map).sort((a,b) => map[b] - map[a]).splice(0, k)
};

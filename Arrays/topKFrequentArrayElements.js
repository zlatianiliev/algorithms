/**
 * Given a non-empty array of integers, return the k most frequent elements.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map[num]) {
            map[num] = map[num] + 1;
        } else {
            map[num] = 1;
        }

    }
    return Object.keys(map)
        .sort((a,b) => map[b] - map[a])
        .splice(0, k)
};

const test = () => {
    const result = topKFrequent([1, 2, 3, 2, 3, 4, 1, 1, 2, 3, 4, 5, 2, 45324, 3], 2);
    console.log(result); // [2, 3]
};

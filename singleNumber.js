/**
 * Given a non-empty array of integers,
 * every element appears twice except for one. Find that single one.
 */

/**
 * Helper method to get the first element value of an object
 */
const getFirstElementValue = obj => obj[Object.keys(obj)[0]];

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
    const map = {};
    for (var i = 0; i < nums.length; i++) {
        if (map[`${nums[i]}`] === undefined) {
            map[`${nums[i]}`] = nums[i];
        } else {
            delete map[`${nums[i]}`];
        }
    }
    return getFirstElementValue(map);
};
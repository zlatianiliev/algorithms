/*
* Given an integer array nums, return true if any value appears at least twice in the array,
* and return false if every element is distinct.
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
    let numsSet = new Set();
    let answer = false;
    nums.forEach(num => {
        if (numsSet.has(num)) {
            answer = true;
        }
        numsSet.add(num);
    })
    
    return answer;
};

/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays.
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const mergeTwoSortedArrays = (arr1, arr2) => {
    let result = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) {
            result.push(arr1[0]);
            arr1.shift();
        } else {
            result.push(arr2[0]);
            arr2.shift();
        }
    }

    const left = arr1.length <= arr2.length ? arr2 : arr1;
    result = result.concat(left);

    return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const sortedArr = mergeTwoSortedArrays(nums1, nums2);
    const len = sortedArr.length;
    const even = (len % 2) === 0;

    if (even) {
        return (sortedArr[len / 2] + sortedArr[len / 2 -1]) / 2;
    }

    return sortedArr[Math.round(len / 2) - 1];
};


const test = () => {
    const arr1 = [1, 2, 4, 77];
    const arr2 = [1, 3, 4];

    const result = findMedianSortedArrays(arr1, arr2);
    console.log(result); // 3
};

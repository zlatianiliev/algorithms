/**
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const mergeTwoLists = (arr1, arr2) => {
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

const test = () => {
    const arr1 = [1, 2, 4, 77];
    const arr2 = [1, 3, 4];

    const result = mergeTwoLists(arr1, arr2);
    console.log(result); // [1, 1, 2, 3, 4, 77]
};

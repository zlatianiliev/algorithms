/*
* Given two non-empty arrays of integers, write a function that
* determines whether a second array is a subsequence of the first one.
* A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but
* that are in the same order as they appear in the array.
* */

function isValidSubsequence(array, sequence) {
    let j = 0;
    let output = false;
    for (let i=0;i<array.length;i++) {
        if(array[i] === sequence[j]) {
            j++;
            if(sequence.length === j) {
                output = true;
            }
        }
    }

    return output;
}

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

console.log(isValidSubsequence(array, sequence)); // true

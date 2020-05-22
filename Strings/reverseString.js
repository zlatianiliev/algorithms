/**
 * Write a function that takes a string as input and return it's reverse.
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseString = s => s.split('').reverse().join('');

const reverseString2 = string => {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        const char = string[i];
        result+= char;
    }
    return result;
};


const test = () => {
    const reversedStr1 = reverseString('hello');
    const reversedStr2 = reverseString2('bye');
    console.log(reversedStr1); // olleh
    console.log(reversedStr2); // eyb
}
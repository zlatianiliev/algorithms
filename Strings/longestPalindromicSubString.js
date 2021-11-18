/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = (s) => {
    const filteredString = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    const reversedString = filteredString.split('').reverse().join('');
    return filteredString === reversedString;
};

/**
 * O(n^3) solution
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (string) => {
    const allSubStrings = [];

    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length + 1; j++) {
            allSubStrings.push(string.slice(i, j));
        }
    }
    
    let result = "";
    let count = 0;
    const palindromeStrings = allSubStrings.filter((word) => isPalindrome(word));
    palindromeStrings.forEach((str) => {
        if (count < str.length) {
            result = str;
            count = str.length;
        }
    });
    
    return result;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = (s) => {
    const filteredString = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    const reversedString = filteredString.split('').reverse().join('');
    return filteredString === reversedString;
};

console.log(isPalindrome('race car')); // true
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('Not a palindrom')); // false

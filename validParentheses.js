/**
* Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
* determine if the input string is valid.
*
* An input string is valid if:
*
* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.
* Note that an empty string is also considered valid.
*/

/**
* @param {string} s
* @return {boolean}
*/
const isValid = (s) => {
    if (s.length === 0) return true;
    if (s.length & 2 !== 0) return false;
    const stack = [];

    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        }

        if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
            if (!stack.length) {
                return false;
            }

            const tempBrack = stack.pop();

            if (s[i] === ')' && tempBrack !== '(') {
                return false;
            }
            if (s[i] === '}' && tempBrack !== '{') {
                return false;
            }
            if (s[i] === ']' && tempBrack !== '[') {
                return false;
            }
        }
    }

    if (!stack.length) return true;

    return false;
};

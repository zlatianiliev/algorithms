/**
 * Write a function that takes a string as input and reverse only the vowels of a string.
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = s => {
    const map = {
        a: 'a',
        e: 'e',
        i: 'i',
        o: 'o',
        u: 'u',
        A: 'A',
        E: 'E',
        I: 'I',
        O: 'O',
        U: 'U',
    };

    const vowels = [];

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            vowels.push(s[i]);
        }
    }

    let answer = '';

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            answer += vowels.pop();
        } else {
            answer += s[i];
        }
    }

    return answer;
};

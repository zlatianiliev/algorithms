/*
* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
* An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
* typically using all the original letters exactly once.
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let letterDict = {};
    let answer = true;
    
    s.split('').forEach(word => {
        if(letterDict[word]) {
            letterDict[word] += 1;
        } else {
            letterDict[word] = 1;
        }
    })
    
    t.split('').forEach(word => {
        if (letterDict[word]) {
            letterDict[word] -= 1;
        } else {
            answer = false;
        }
    })
    
    return answer;
    
};

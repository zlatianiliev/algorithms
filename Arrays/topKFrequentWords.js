/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = (words, k) => {
    const dict = {};
    
    words.forEach(word => {
        if (!(word in dict)) {
            dict[word] = 1;
        } else {
            dict[word] += 1;
        }
    });
    
    // Sort object by key and value
    const sorted = Object.keys(dict).sort((a, b) => { 
        if (dict[b] === dict[a]) { 
            return a > b ? 1 : -1 
        }
        return dict[b] - dict[a]
    });
    
    return sorted.slice(0, k);
    
};

console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 2)); // ["i","love"]
console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4)); // ["the","is","sunny","day"]

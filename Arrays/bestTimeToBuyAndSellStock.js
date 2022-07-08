/*
* You want to maximize your profit by choosing a single day to buy one stock and
* choosing a different day in the future to sell that stock. Return the maximum profit
* you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;
    
    prices.forEach((price, i) => {
        if (prices[i] < buyPrice) {
            buyPrice = prices[i];
        }
        
        if (prices[i] - buyPrice > profit) {
            profit = prices[i] - buyPrice;
        }
    });
    
    return profit;
};

// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.
class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //case1 = prices=[7,1,5,3,6,4]
        //case2 = prices=[7,6,4,3,1]

        //initialize the min price definition
        let minPrice = prices[0]
        //initialize the maxProfit at 0 to start
        let maxProfit = 0

        //for loop to go through the prices array
        //setting i to equal 1, because we're not starting at day 0, we're starting at day 1 (2)
        for (let i = 1; i < prices.length; i++) {
            //initialize curProfit within the loop to equal the prices at i minus the minPrice
            //in this case i will be 1 and minPrice will be 7
            let currentProfit = prices[i] - minPrice
            //so when it finds the first item in the array curProf = 1 - 7 = -8
            //you'd be losing money if you could do this
            maxProfit = Math.max(maxProfit, currentProfit)
            //set maxProfit equal to greatest number between 0 and currentProfit (0 and - 8)
            minPrice = Math.min(minPrice, prices[i])
            //set minPrice equal to prices at i (1)
            //On the second loop i will be 2, which will be 5
            //and minPrice will be the lowest number between (1, 5)
            //so curProf will be equal to prices[2] minus minPrice(1) which will equal 5 - 1 = 4
            //finally some profit
            //then we get the new minPrice which will be the smallest number between (1, 5)
            //so we can see that minPrice is remaining consistent as the buy in
            //and maxProfit changes and updates based on the equation
            //now i increments again and becomes 3
            //so curProf is equal to prices[3] minus 1 (3 - 1 = 2)
            //maxProfit is equal to the largest number between (4, 2) so 4 still
            //and minPrice is equal to... the lowest number between (1, 3) still 1
            //we continue the loop
            //i becomes 4
            //curProf = prices[4] minus 1 (6 - 1 = 5)
            //maxProf (4, 5)
            //More money! Now maxProf = 5
            //minPrice (1, 6) still 1
            //loop, last one
            //i becomes 5
            //curProf = prices[5] - 1 (4 - 1 = 3)
            //maxProf (5, 3)
            //minPrice (1, 4)
            //sell on the 4th day to make a profit of 5
            //O(n)
        }
        return maxProfit
        //returning 5
        //in case2 you'd start at i 2, which is 6, if you sell back in time you'd make negative money
        //if you sold at 4 you'd make negative money
        //if you sold at 4 or 3 you'd make negative money
        //since 0 is greater than all of those numbers, you'd return a maxProfit of 0, no monies :(
    }
}

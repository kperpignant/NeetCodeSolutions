//Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Set()
        for(let item of nums) {
            if(seen.has(item)) {
                return true
            }
            seen.add(item);
        }
        return false;
    }
}
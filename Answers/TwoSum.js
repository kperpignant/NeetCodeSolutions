// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
// Return the answer with the smaller index first.
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}

    for (let i = 0; i < nums.length; i++) {
        let num2 = target - nums[i]

        if (num2 in map) {
            return [ map[num2], i ]
        }

        map[nums[i]] = i
        }
    }
}

// Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).
class Solution {
    isPalindrome(s) {
        let flipped = s.toLowerCase().replace(/ /g, "").replace(/[^a-zA-Z0-9\s]/g, '').split('').reverse('').join('')
        let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '')
        return cleaned === flipped ? true : false
    }
}
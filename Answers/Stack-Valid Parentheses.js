// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
// The input string s is valid if and only if:
// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let char of s) {

        if (!(char in map)) {
            // opening bracket
            stack.push(char)
            } else {
            // closing bracket
                if (stack.length === 0) return false

                let top = stack.pop()

                if (top !== map[char]) {
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
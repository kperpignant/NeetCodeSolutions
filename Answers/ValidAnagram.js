//Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
//An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
class Solution {
    isAnagram(s, t) {

        let sLen = s.length
        let tLen = t.length

        let sArr = s.split('').sort()
        let tArr = t.split('').sort()
        //console.log(sArr, tArr)

        let sMapped = sArr.reduce((count,item) => {
            count[item] = (count[item] || 0) + 1;
            return count
        }, {})

        let tMapped = tArr.reduce((count,item) => {
            count[item] = (count[item] || 0) + 1;
            return count
        }, {})

        // let sMapped = sArr.map((count,item) => {
            
        // })

        console.log(JSON.stringify(sMapped),JSON.stringify(tMapped))

        if(JSON.stringify(sMapped) !== JSON.stringify(tMapped)) {
            return false;
        }
        if(sLen === tLen) {
            return true;
        }

        //console.log(sMapped, tMapped)
        
    }
}
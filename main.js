// 5. Longest Palindromic Substring

s = "babad"

// My solution
const isPalindrome = (s) => {
    let left = 0;
    let right = s.length - 1

    while (left <= right) {
        if(s[left] !== s[right]){
            return false
        }
        left++
        right--
    }
    return true
}

var longestPalindrome = function (s) {
    let result = s[0]
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                const temp = s.slice(i, j + 1)
                if(isPalindrome(temp) && result.length < temp.length ){
                    result = temp
                }
                
            }
        }
    }
    return result
};


console.log( longestPalindrome(s))
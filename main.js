// 2108. Find First Palindromic String in the Array

const words = ["abcsffewfewfewfesdfsfdcba", "car", "ada", "racecar", "cool"]


var firstPalindrome = function (words) {

    for (let word of words) {
        let left = 0
        let right = word.length - 1
        while (left <= right) {
            console.log(word)
            if(word[right] !== word[left] ){
                break
            }
            else{
                left ++
                right --
                if(left >= right){
                    return word
                }
            }
        }
    }
    return ''
};

console.log(firstPalindrome(words))
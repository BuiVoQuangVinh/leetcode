// 1652. Defuse the Bomb


s = "Let's take LeetCode contest"

var reverseWords = function(s) {
    const arr = s.split(" ")

    for(let i=0;i<arr.length;i++){
        let temp=''
        for(let j=arr[i].length - 1; j>=0;j--){
            temp+= arr[i][j]
        }

        arr[i] = temp
    }
    return arr.join(" ")
};

console.log(reverseWords(s));
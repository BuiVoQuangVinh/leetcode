// 557. Reverse Words in a String III

const s = "Let's take LeetCode contest"

var reverseWords = function(str) {
    const reverseWord = (str)=>{
        let newStr = ''
        for (let i  = str.length - 1; i>=0;i--){
            newStr += str[i]
        }
        return newStr
    } 
    
    const result  = s.split(" ").reduce( (value,current,index,array)=>{
        if(index ===  array.length - 1){
            return value+reverseWord(current)
        }
        return value+reverseWord(current)+" "
    },'' )
    return result
};
console.log(reverseWords(s))
console.log(reverseWords(s)  === "s'teL ekat edoCteeL tsetnoc")
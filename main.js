var minBitFlips = function (start, goal) {
    let result = 0
    // xor tim cac binary khac nhau cua tung so => so buoc can doi
    let stringXor = (start ^ goal).toString(2)
    for (let i = 0; i < stringXor.length; i++){
        if(stringXor[i] == 1){
            result+=1
        }
    }
    return result;
};


console.log(minBitFlips(5, 3));
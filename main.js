// 1876. Substrings of Size Three with Distinct Characters


s = "aababcabc"

var countGoodSubstrings = function(s) {
    let numberOfGoodSubStrings = 0
    for(let i = 0;i<s.length -2;i++){
        let temp =   s.slice(i,i+3) 
        if( temp[0] !== temp[1] && temp[0] !== temp[2] && temp[1] !== temp[2] ){
            numberOfGoodSubStrings ++
        }

    }
    return numberOfGoodSubStrings
};


console.log(countGoodSubstrings(s))

// 2399. Check Distances Between Same Letters
s = "abaccb", distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

var checkDistances = function(s, distance) {
    let hashTable = {}
    for(let i=0;i<s.length;i++){
        if(hashTable[s[i]] === undefined){
            if(s[i]!==s[i+ distance[s[i].charCodeAt(0)-97] + 1]){
                return false
            }
            hashTable[s[i]] = i
        }
    }
    return true
};

console.log(checkDistances(s,distance))

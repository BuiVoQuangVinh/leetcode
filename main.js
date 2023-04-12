// 205. Isomorphic Strings

s = "badc", t = "baba"

var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    let hashTable = {

    }

    for (let i = 0; i < s.length; i++) {
        if (hashTable[s[i]] === undefined ) {
            if( Object.values(hashTable).includes(t[i])){
                return false
            }
            
            hashTable[s[i]] = t[i]

        }
        else {
            if (hashTable[s[i]] !== t[i]) {
                return false
            }
        }
    }
    return true
};



console.log(isIsomorphic(s, t))


const obj = {
    name:'vinh',
    age:'24',
}

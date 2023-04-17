// 409. Longest Palindrome

s= "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"

var longestPalindrome = function (s) {
    const countTable = {}
    for (let i = 0; i < s.length; i++) {
        if (!countTable[s[i]]) {
            countTable[s[i]] = 1
        }
        else {
            countTable[s[i]] += 1
        }
    }

    console.log(countTable)

    let result = 0
    let propeties = Object.keys(countTable)

    for (let i = 0; i < propeties.length; i++) {
        if (countTable[propeties[i]] % 2 === 0) {
            result += countTable[propeties[i]]
        }

        else{
            result += countTable[propeties[i]] -1 
        }
    }

    return result + 1
};

console.log(longestPalindrome(s))
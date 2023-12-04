// 804. Unique Morse Code Words

words = ["gin", "zen", "gig", "msg"]
var uniqueMorseRepresentations = function (words) {
    const result = new Set()
    const hashTable = { 'a': ".-", 'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".", 'f': "..-.", 'g': "--.", 'h': "....", 'i': "..", 'j': ".---", 'k': "-.-", 'l': ".-..", 'm': "--", 'n': "-.", 'o': "---", 'p': ".--.", 'q': "--.-", 'r': ".-.", 's': "...", 't': "-", 'u': "..-", 'v': "...-", 'w': ".--", 'x': "-..-", 'y': "-.--", 'z': "--.." }

    for (let i = 0; i < words.length; i++) {
        let str = ''
        for (let j = 0; j < words[i].length; j++) {

            str += hashTable[words[i][j]]
        }
        result.add(str)
    }

    return result.size
};


console.log(uniqueMorseRepresentations(words))


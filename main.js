// 500. Keyboard Row

var findWords = function (words) {
  const hashTable = {
    q: 1,
    w: 1,
    e: 1,
    r: 1,
    t: 1,
    y: 1,
    u: 1,
    i: 1,
    o: 1,
    p: 1,
    a: 2,
    s: 2,
    d: 2,
    f: 2,
    g: 2,
    h: 2,
    j: 2,
    k: 2,
    l: 2,
    z: 3,
    x: 3,
    c: 3,
    v: 3,
    b: 3,
    n: 3,
    m: 3,
  }
  const result = [];
  for (let word of words) {
    const toLowWord = word.toLowerCase()
    if (toLowWord.length == 1) {
      result.push(word)
    }
    else {
      for (let i = 1; i < toLowWord.length; i++) {
        if (hashTable[toLowWord[0]] !== hashTable[toLowWord[i]]) {
          break
        }
        else {
          if (i == (toLowWord.length - 1)) {
            result.push(word)
          }
        }
      }
    }
  }
  return result
};


const words = ["Hello", "Alaska", "Dad", "Peace",'a','b'];
console.log(findWords(words));

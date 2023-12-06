// 2696. Minimum String Length After Removing Substrings



s = "ABFCACDB"

var minLength = function (s) {
    while (s.indexOf('AB') >= 0 || s.indexOf('CD') >= 0) {
        s = s.replace(/AB|CD/g, "")
    }
    return s.length

};

console.log(minLength(s))
// 796. Rotate String


s = "abcde", goal = "abced"
var rotateString = function (s, abced) {
    if (s === goal) {
        return true
    }
    if (s.length !== goal.length) {
        return false
    }
    let temp = s
    let times = s.length
    while (times) {
        temp = temp.slice(s.length - 1) + temp.slice(0, -1)
        if (temp === goal) {
            return true
        }
        times--
    }
    return false

};


console.log(rotateString(s, goal))

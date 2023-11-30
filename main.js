// 657. Robot Return to Origin

moves = "UD"

var judgeCircle = function (moves) {
    let current = [0, 0]
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'R') {
            current[0]++
        }
        else if (moves[i] === 'L') {
            current[0]--
        }
        else if (moves[i] === 'U') {
            current[1]++
        }
        else {
            current[1]--
        }
    }
    if (current[0] === 0 && current[1] === 0) {
        return true
    }
    return false
};


console.log(judgeCircle(moves))

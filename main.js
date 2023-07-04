// 2224. Minimum Number of Operations to Convert Time


var convertTime = function (current, correct) {
    let result = 0
    let hours = 0
    let mins = correct.slice(3, 5) - current.slice(3, 5)
    if(mins<0){
        mins+=60
        hours = correct.slice(0, 2) - current.slice(0, 2) - 1
    }
    else{

        hours = correct.slice(0, 2) - current.slice(0, 2)
    }

    if (hours > 0) {
        let temp = hours
        hours -= temp
        result += temp
    }

    if (mins >= 15) {
        let temp = parseInt(mins / 15)
        mins -= temp * 15
        result += temp
    }

    if (mins >= 5) {
        let temp = parseInt(mins / 5)
        mins -= temp * 5
        result += temp
    }
    if (mins > 0) {
        let temp = mins
        mins -= temp
        result += temp
    }

    return result
};


console.log(convertTime("00:00", "23:59"));
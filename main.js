// 1598. Crawler Log Folder

const logs = ["d1/","d2/","./","d3/","../","d31/"]


var minOperations = function (logs) {
    let result = 0
    for (let log of logs) {
        if(log === './'){
            continue
        }else if(log === '../'){
            result--
            if(result < 0){
                result=0
            }

        }else{
            result++
        }
    }
    return result
};

console.log(minOperations(logs))
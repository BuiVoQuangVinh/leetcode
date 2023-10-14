// 492. Construct the Rectangle

gain = [-5,1,5,0,-7]

var largestAltitude = function (gain) {
    // let current = 0
    // let highest = 0

    // for (let i = 0; i < gain.length; i++) {
    //     current += gain[i]
    //     if (highest < current) {
    //         highest = current
    //     }

    // }
    // return highest

    let arr = []
    arr[0] = 0
    for(let i=0;i<gain.length;i++){
        arr[i+1] = arr[i]+ gain[i]
    }
    return Math.max(...arr)

};

console.log(largestAltitude(gain));
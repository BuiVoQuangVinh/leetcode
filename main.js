// 1266. Minimum Time Visiting All Points


points = [[3,2],[-2,2]]
// 3,2

// -2,2


// console.log(Math.abs(-1))

var minTimeToVisitAllPoints = function (points) {
    let step = 0
    for (let i = 1; i < points.length; i++) {
        step += Math.max(Math.abs(points[i][0] - points[i - 1][0]), Math.abs(points[i][1] - points[i - 1][1]))
    }
    return step
};


console.log(minTimeToVisitAllPoints(points))
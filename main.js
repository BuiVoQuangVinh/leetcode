
// 746. Min Cost Climbing Stairs

const cost = [1,100,1,1,1,100,1,1,100,1]

var minCostClimbingStairs = function (cost) {
    if(cost.length === 1){
        return cost[0]
    }
    cost.push(0)
    console.log(cost)
    for(let i = 2;i<cost.length;i++){
        cost[i] =Math.min( cost[i]+cost[i-1],cost[i]+cost[i-2]) 
    }

    return cost[cost.length-1]
};

console.log(minCostClimbingStairs(cost))
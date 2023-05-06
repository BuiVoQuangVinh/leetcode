// 1217. Minimum Cost to Move Chips to The Same Position



var minCostToMoveChips = function (position) {
    let even = 0;
    let odd = 0
    for (let i = 0; i < position.length; i++) {
        if (position[i] % 2 === 0) {
            even++
        }
        else {
            odd++
        }
    }

    return even < odd ? even : odd

};
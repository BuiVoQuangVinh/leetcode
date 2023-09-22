// 1046. Last Stone Weight

stones = [2,7,4,1,8,1]

var lastStoneWeight = function(stones) {
    let newStones = stones.sort((a,b)=> a-b )

    while(newStones.length > 1 ){
        const temp = newStones[newStones.length -1] - newStones[newStones.length - 2 ]
        console.log(newStones);
        console.log(newStones.length);
        console.log({temp});
        newStones = [...newStones.slice(0,-2)]
        if(temp !== 0){
            for(let i=0;i<=newStones.length;i++){
                if(i === newStones.length){
                    newStones.splice( i+1,0,temp)
                }
                if(newStones[i] >= temp){{
                    newStones.splice( i,0,temp)
                    break
                }}

            }
        }
        console.log('==========================================');
        
    }

    return newStones[0]


};

console.log(lastStoneWeight(stones));
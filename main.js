// 1790. Check if One String Swap Can Make Strings Equal

s1 = "bank", s2 = "kanb"



var areAlmostEqual = function (s1, s2) {

    if (s1 === s2) {
        return true
    }
    let collect = []

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {

            collect.push(i)
        }
    }
    console.log(collect)
    if (collect.length !== 2) {
        return false
    }

    else if (s1[collect[0]] === s2[collect[1]] && s2[collect[0]] === s1[collect[1]]) {
        return true
    }

    else {
        return false
    }

    // if( s1 === s2){
    //     return true
    // }

    // let count = 0
    // const hashTableS1 = {}
    // for (let i = 0; i < s1.length; i++) {
    //     if (!hashTableS1[s1[i]]) {
    //         hashTableS1[s1[i]] = 1
    //     }
    //     else {
    //         hashTableS1[s1[i]] += 1
    //     }
    // }


    // for(let i =0;i<s1.length;i++){
    //     if (!hashTableS1[s2[i]]){
    //         return false
    //     }
    //     else{
    //         hashTableS1[s2[i]] --
    //         if( !hashTableS1[s2[i]] <0){
    //             return false
    //         }
    //         if( s1[i] !== s2[i]){
    //             count++
    //             if(count >2){
    //                 return false
    //             }
    //         }
    //     }

    // }
    // return true
};

console.log(areAlmostEqual(s1, s2))
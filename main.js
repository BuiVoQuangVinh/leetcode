// 2665. Counter II

init = 0, calls = ["increment","increment","decrement","reset","reset"]

var createCounter = function(init) {
    let temp = init     
    const increment=()=>{
        temp++
        return temp
    }
    const decrement=()=>{
        temp--
        return temp
    }
    const reset=()=> {
        temp = init
         return temp
    }
    return {
        increment,
        decrement,
        reset,
    }
};

const counter = createCounter()

// console.log(counter)
calls.map( (call)=>{
    console.log(counter[call]())
} )




// arr1 = {"id": 2, "x": 3, "y": 6}

    // arr2 = {"id": 2, "x": 10, "y": 20}
 
// console.log({...arr2,...arr1})

//2722. Join Two Arrays by ID




arr1 = [{"id":1,"x":36,"d":26,"f":35},{"id":3,"c":20,"z":75}]
arr2 = [{"id":2,"o":48,"z":84,"y":61}]

var join = function (arr1, arr2) {

    const collect = {}

    for (const obj of [...arr1, ...arr2]) {
        const id = obj.id;
        collect[id] = { ...(collect[id] || {}), ...obj };
    }

    return Object.values(collect)
 
};  

console.log(join(arr1, arr2))


// arr1 = {"id": 2, "x": 3, "y": 6}

// arr2 = {"id": 2, "x": 10, "y": 20}
 

// console.log({...arr2,...arr1})
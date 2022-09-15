const n = 10
const minNumber = (number)=>{
    if ( number <10){
        return number
    }

    if (number > 45){
        return -1
    }
    let result = 0;
    let temp = 1;
    let count = 9
    while (number>0){
        result+= temp*count
        temp*=10
        number -= count
        count --
        if(number <= count){
            result+= temp*number
            return result
        }
    }
    return result
}

console.log(minNumber(n))

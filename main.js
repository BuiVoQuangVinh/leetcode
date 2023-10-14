// 1108. Defanging an IP Address

address = "255.100.50.0"
 
var defangIPaddr = function(address) {
    let arr = address.split('')


    for(let i =0;i<arr.length;i++){
        console.log({i,arr});
        if(arr[i] === '.'){
            arr.splice(i,0,'[' )
            arr.splice(i+2,0,']' )
            i+=2
        }

    }

   return arr.join('')
};


console.log(defangIPaddr(address));
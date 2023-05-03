// 2299. Strong Password Checker II

password = "AaBbCc!"

var strongPasswordCheckerII = function(password) {
    let leastLetter = 8

    let lowercase = false
    let uppercase = false
    let digit = false
    let specialCharacter = false
    let sameCharinAdjacent = true
    
    if(password.leng < leastLetter){
        return false
    }



    for (let i=0;i<password.length;i++){

        if( password[i] ===  password[i+1]){
            return false
        }
        // 65:A -> 90:Z
        if( password[i].charCodeAt()>=65 && password[i].charCodeAt()<=90 ){
            uppercase = true
        }
        // 97:a ->122:z
        else if( password[i].charCodeAt()>=97 && password[i].charCodeAt()<=122 ){
            lowercase = true
        }

        else if( password[i].charCodeAt()>=48 && password[i].charCodeAt()<=57 ){
            digit = true
        }
        else{
            specialCharacter = true
        }
       

    }

    return lowercase&& uppercase&&digit&&specialCharacter&&sameCharinAdjacent
};
console.log(strongPasswordCheckerII(password))
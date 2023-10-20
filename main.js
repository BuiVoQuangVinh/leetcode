// 1572. Matrix Diagonal Sum



mat =  [[1,1,1,1],
[1,1,1,1],
[1,1,1,1],
[1,1,1,1]]
var diagonalSum = function (mat) {
    let result = 0
    let length = mat.length
    let a = 0, b = 0, c = 0, d = length - 1;
    for (let i = 0; i < length; i++) {
    
        result = result + mat[a + i][b + i] + mat[c + i][d - i]
    }
    if( length %2 === 0){
        return result
    }

    else{
        return result - mat[(length-1)/2][(length-1)/2]
    }
   

};

console.log(diagonalSum(mat));
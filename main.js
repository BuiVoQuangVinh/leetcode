// 1189. Maximum Number of Balloons

text = 'loonbalxballpoon'

// balloon 
var maxNumberOfBalloons = function (text) {
    const frequencyArr = [0, 0, 0, 0, 0]
    for (let i = 0; i < text.length; i++) {
        if(text[i]==='b'){
            frequencyArr[0] +=1
        }
        else if(text[i]==='a'){
            frequencyArr[1] +=1
        }

        else if(text[i]==='l'){
            frequencyArr[2] +=1
        }

        else if(text[i]==='o'){
            frequencyArr[3] +=1
        }

        else if(text[i]==='n'){
            frequencyArr[4] +=1
        }
    }
    frequencyArr[2] =Math.floor( frequencyArr[2] /2)
    frequencyArr[3] =Math.floor( frequencyArr[3] /2)
    return Math.min(...frequencyArr)
};


console.log(maxNumberOfBalloons(text))
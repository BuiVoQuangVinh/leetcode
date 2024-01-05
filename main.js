// 455. Assign Cookies


var findContentChildren = function (g, s) {

  if (s.length == 0) {
    return 0
  }
  const sortG = g.sort((a, b) => a - b);
  const sortS = s.sort((a, b) => a - b);

  let result = 0;
  let indexS = 0;
  let indexG = 0;
  while (indexG < sortG.length && indexS < sortS.length) {
    if (sortG[indexG] <= sortS[indexS]) {
      indexG++;
      indexS++;
      result++;
    }
    else if (sortG[indexG] > sortS[indexS]) {
      indexS++
    }
  }
  //   for (let i = 0; i < sortG.length; i++) {
  //     console.log(indexS , i)
  //     if (sortG[i] <= sortS[indexS]) {
  //       indexS++;
  //       result++;
  //        if(indexS == sortS.length){
  //         break;
  //       }
  //     }
  //     else {
  //       indexS++;
  //       if(indexS == sortS.length){
  //         break
  //       }
  //       i--;
  //     }
  //   }
  return result;

};
g = [10, 9, 8, 7], s = [5, 6, 7, 8]
console.log(findContentChildren(g, s))

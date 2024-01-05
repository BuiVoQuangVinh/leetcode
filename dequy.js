// function combinationsWithoutRepetition(array, length) {
//     const result = [];
  
//     function generateCombinations(startIndex, combination) {
//       if (combination.length === length) {
//         result.push([...combination]);
//         return;
//       }
  
//       for (let i = startIndex; i < array.length; i++) {
//         combination.push(array[i]);
//         generateCombinations(i + 1, combination);
//         combination.pop();
//       }
//     }
  
//     generateCombinations(0, []);
//     return result;
//   }
  
//   const set = [1, 2, 3, 4, 5, 6];
//   const k = 3;
//   const result = combinationsWithoutRepetition(set, k);
//   console.log(result);

function permutations(array) {
    const result = [];
  
    function generatePermutations(current, remaining) {
      if (remaining.length === 0) {
        result.push(current.slice());
        return;
      }
  
      for (let i = 0; i < remaining.length; i++) {
        const next = current.concat(remaining[i]);
        const rest = remaining.slice(0, i).concat(remaining.slice(i + 1));
        generatePermutations(next, rest);
      }
    }
  
    generatePermutations([], array);
    return result;
  }
  
  function permutations(array, length) {
    const result = [];
  
    function generatePermutations(current, remaining) {
      if (current.length === length) {
        result.push(current.slice());
        return;
      }
  
      for (let i = 0; i < remaining.length; i++) {
        const next = current.concat(remaining[i]);
        const rest = remaining.slice(0, i).concat(remaining.slice(i + 1));
        generatePermutations(next, rest);
      }
    }
  
    generatePermutations([], array);
    return result;
  }
  
  const set = [1, 2, 3, 4, 5, 6];
  const k = 3;
  const result = permutations(set, k);
  console.log(result);

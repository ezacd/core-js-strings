function sumOfCodes(str) {
    let sum = 0;
  
    for (let i = 0; i < str.length; i += 1) {
      sum += str.charCodeAt(i);
    }
    return sum;
  }

  console.log(sumOfCodes('1ewd'))
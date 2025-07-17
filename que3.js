function isArmstrong(num) {
    let str = num.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      let digit = parseInt(str[i]);
      sum += Math.pow(digit, str.length);
    }
    return sum === num;
  }
  
  console.log(isArmstrong(153)); 
  console.log(isArmstrong(123));
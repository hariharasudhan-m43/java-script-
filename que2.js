function sumofdigit(num) {
  let sum = 0;
  while (num>0) {
    sum += num%10;
    num = Math.floor(num/10);
  }
  return sum;
}
let num = 123;
console.log(sumofdigit(num));
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
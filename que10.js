function secondLargest(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }
    return secondMax === -Infinity ? null : secondMax;
}
console.log(secondLargest([10, 20, 30, 40, 50]));
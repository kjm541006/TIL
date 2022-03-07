function recursive(num) {
  if (num == 0) return 0;
  return num + recursive(num - 1);
}
console.log(recursive(3)); // output: 6

function factorial(x) {
  if (x == 0) return 1;
  return x * factorial(x - 1);
}
const num = 3;
let result = factorial(num);
console.log(result);

function recursive1(num) {
  if (num == 0) return;
  recursive1(num - 1);
  console.log(num);
}
recursive1(3);

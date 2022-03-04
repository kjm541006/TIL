// 0~10까지 짝수의 합 출력
const UNTIL_NUM = 10;
let sum = 0;

for (let i = 0; i <= UNTIL_NUM; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}

console.log(sum);

// 2중 for문 사용 2단부터 9단 출력
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}

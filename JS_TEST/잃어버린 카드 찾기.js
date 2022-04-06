/* 2. 잃어버린 카드 찾기 */

/* user code */
function answer(a, b, c) {
  let number = 0;
  let d = 0;

  // sort
  num = [a, b, c];
  num.sort((x, y) => x - y);

  // 1. find d -> 공차 찾기
  for (let i = 0; i < num.length; i++) {
    if (num[i + 1] - num[i] > d) {
      d = num[i + 1] - num[i];
    }
  }
  d *= 0.5;

  // 2. 값 구하기
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i + 1] != num[i] + d) {
      number = num[i] + d;
    }
  }

  return number;
}

/* main code */
let input = [
  // TC: 1
  [1, 7, 10],

  // TC: 2
  [3, 8, 18],

  // TC: 3
  [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}

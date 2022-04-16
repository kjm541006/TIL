/* 달팽이 만들기 */

/* user code */
function answer(length) {
  let result = [];

  // 2차원 배열 만들기
  for (let i = 0; i < length; i++) {
    result[i] = [];
  }

  // 값 채우기
  let x, y, num;
  x = y = num = 0;
  x--;

  while (1) {
    for (let i = 0; i < length; i++) {
      x += 1;
      result[y][x] = ++num;
    }

    length--;
    if (length == 0) break;

    for (let j = 0; j < length; j++) {
      y += 1;
      result[y][x] = ++num;
    }

    for (let i = 0; i < length; i++) {
      x -= 1;
      result[y][x] = ++num;
    }

    length--;
    if (length == 0) break;

    for (let j = 0; j < length; j++) {
      y -= 1;
      result[y][x] = ++num;
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  6,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

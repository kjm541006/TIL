/* 벽돌 옮기기 */

/* user code */
function answer(blocks) {
  let result = 0;
  // 모든 원소의 합 = all
  let all = 0;
  // 균등한 층의 수
  let floor = 0;
  for (let i = 0; i < blocks.length; i++) {
    all += blocks[i];
  }

  floor = all / blocks.length;

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] > floor) {
      result += blocks[i] - floor;
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 4, 1, 7, 5],

  // TC: 2
  [12, 8, 10, 11, 9, 5, 8],

  // TC: 3
  [27, 14, 19, 11, 26, 25, 23, 15],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

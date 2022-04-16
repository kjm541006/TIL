/* OX 퀴즈 */

/* user code */
function answer(mark) {
  let result = 0;

  let bonus = 0;

  // 맞출경우 +1점
  for (let i = 0; i < mark.length; i++) {
    if (mark[i] == 1) {
      result += 1;
    } else {
      // 틀릴 경우 보너스 점수 초기화
      bonus = 0;
    }
    // 만약 연속으로 맞출 경우 가산점 추가
    if (mark[i] == 1 && mark[i - 1] == 1) {
      bonus += 1;
    }
    result += bonus;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],

  // TC: 2
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],

  // TC: 3
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

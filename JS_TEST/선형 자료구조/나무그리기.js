/* 나무 그리기 */

/* user code */
function answer(height) {
  let str = "\n";

  for (let i = 0; i < height; i++) {
    // 공백 처리
    for (let j = height; j > i; j--) {
      str += " ";
    }

    // * 처리
    for (let j = 0; j < i * 2 + 1; j++) {
      str += "*";
    }

    // 개행문자 추가
    str += "\n";
  }

  // 거꾸로 찍기
  // for (let i = height; i > 0; i--) {
  //   for (let j = 0; j < height - i; j++) {
  //     str += " ";
  //   }
  //   for (let j = 0; j < i * 2 - 1; j++) {
  //     str += "*";
  //   }
  //   str += "\n";
  // }

  return str;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  7,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

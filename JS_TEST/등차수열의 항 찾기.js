/* 1. 등차수열의 항 찾기 */

/* user code */

// my code

function answer(a, d, n) {
  const err = -1;
  let index;
  if (n % d != a) {
    return err;
  } else {
    if (n == a) return 1;

    index = answer(a, d, n - d) + 1;

    return index;
  }
}

// answer code

// function answer(a, d, n) {
//   let index = -1;

//   if ((n - a) % d == 0) {
//     index = (n - a) / d + 1;
//   } else index = -1;

//   return index;
// }

/* main code */
let input = [
  // TC: 1
  [1, 2, 7],
  // TC: 2
  [2, 3, 10],
  // TC: 3
  [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}

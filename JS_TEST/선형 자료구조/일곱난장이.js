/* 일곱 난장이 */

/* user code */
function answer(dwarf) {
  let result = [];
  let sum = dwarf.reduce((a, b) => a + b);
  let gap = sum - 100;
  let two = 0;
  let num1index = 0;
  let num2index = 0;

  for (let i = 0; i < dwarf.length; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      two = dwarf[i] + dwarf[j];
      if (two == gap) {
        num1index = i;
        num2index = j;
      }
    }
  }

  for (let i = 0; i < dwarf.length; i++) {
    if (i != num1index && i != num2index) {
      result.push(dwarf[i]);
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [1, 5, 6, 7, 10, 12, 19, 29, 33],

  // TC: 2
  [25, 23, 11, 2, 18, 3, 28, 6, 37],

  // TC: 3
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

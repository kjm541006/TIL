/*** 5. 무한 뺄셈 ***/

/* user code */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);
  let num = 0;
  let i = 0;

  while (1) {
    let gap = sequence[i] - sequence[i + 1];
    if (gap < 0) break;
    num = gap;
    sequence.push(num);
    i++;
  }

  // let sum;
  // while (1) {
  //   sum = s - e;
  //   s = e;
  //   e = sum;
  //   if (e < 0) break;
  //   sequence.push(sum);
  // }

  return sequence;
}

/* main code */
let input = [
  // TC: 1
  [9, 3],
  // TC: 2
  [6, 3],
  // TC: 3
  [13, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

/*** 4. 헨드폰 판매 ***/

/* user code */
function answer(employee) {
  let employee_id;
  let num = 0;
  for (let i = 0; i < employee.length; i++) {
    if (employee[i] > num) {
      num = employee[i];
      employee_id = i;
    }
  }
  average = employee_id + 1;

  return average;
}

/* main code */
let input = [
  // TC: 1
  [3, 7, 9, 6, 1],
  // TC: 2
  [2, 7, 1, 4, 3, 0, 5],
  // TC: 3
  [7, 5, 0, 1, 2, 12, 6],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

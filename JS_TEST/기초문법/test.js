// function solution(A) {
//   var answer = 0;
//   let arr = [];

//   for (let i of A) {
//     arr.push([...i].reverse());
//   }
//   console.log(arr);
//   for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (A[i] == arr[j]) {
//         answer += 1;
//       }
//     }
//   }

//   return answer;
// }

// A = [
//   ["철수", "영희"],
//   ["영희", "진수"],
//   ["진수", "동수"],
//   ["진수", "진호"],
// ];
// console.log(solution(A));

// function solution(A) {
//   let arr = [];
//   let answer = new Array(A.length).fill(0);
//   for (let i of A) {
//     i = i.toString(2);
//     arr.push(i);
//   }
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] == 1) {
//         answer[i] += 1;
//       }
//     }
//   }
//   console.log(answer);
//   answer.sort();
// }

// A = [1, 2, 3, 4];
// console.log(solution(A));

function solution(A) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    sum = A[i] + sum;
    if (sum < A[i]) {
      sum = A[i];
    }
    if (max < sum) {
      max = sum;
    }
  }
  return max;
}

A = [2, -8, 3, -2, 4, -10];
console.log(solution(A));

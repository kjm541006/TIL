let input = ["a", "b", "c"];
let count = 0;

// {
//   // 무지성 for문 (순열)

//   function permutation(arr) {
//     // for i -> 첫번째 위치시킬 요소 고르기
//     for (let i = 0; i < arr.length; i++) {
//       // for j -> 두번째 위치시킬 요소
//       for (let j = 0; j < arr.length; j++) {
//         if (i == j) continue;
//         // for k -> 세번째 index 위치시킬 요소
//         for (let k = 0; k < arr.length; k++) {
//           if (i == k) continue;
//           if (j == k) continue;

//           console.log(arr[i], arr[j], arr[k]);
//           count++;
//         }
//       }
//     }
//   }

//   permutation(input);
//   console.log(count);
// }

{
  function permutation(arr, s, r) {
    if (s == r) {
      count++;
      console.log(arr.join(" "));
      return;
    }

    for (let i = s; i < arr.length; i++) {
      [arr[s], arr[i]] = [arr[i], arr[s]];
      permutation(arr, s + 1, r);
      [arr[s], arr[i]] = [arr[i], arr[s]];
    }
  }
  permutation(input, 0, 2);
  console.log(count);
}

let input = [1, 2, 3, 4];
let count = 0;
// {
//   // 무지성 for 문 (조합)
//   function combination(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         for (let k = j + 1; k < arr.length; k++) {
//           count++;
//           console.log(arr[i], arr[j], arr[k]);
//         }
//       }
//     }
//   }

//   combination(input);
//   console.log(count);
// }

let output = [];

function combination(arr, data, s, idx, r) {
  if (s == r) {
    count++;
    console.log(data);
    return;
  }

  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combination(arr, data, s + 1, i + 1, r);
  }
}

combination(input, output, 0, 0, 2);
console.log(count);

// arr.length = 4

// i = 0, s = 0, r = 2 -> data[0] = 1     4 - 0 >= 2 - 0
// // combination(arr, data, 1, 1, 2)
// // i = 1, s = 1, r = 2 -> data[1] = 2     4 - 1 >= 2 - 1
// // // combinatino(arr, data, 2, 2, 2)
// // // i = 2, s = 2, r = 2
// // // count ++, console.log([1,2])
// // i = 2, s = 1, r = 2 -> data[1] = 3     4 - 2 >= 2 - 1
// // // combination(arr, data, 2, 3, 2)
// // // i = 3, s = 2, r = 2
// // // count ++, console.log([1,3])
// ...
// i = 1, s = 0, r = 2 -> data[0] =

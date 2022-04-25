let arr = [
  [1, 2, 3],
  [4, 5],
];
let concatArr = [];

for (let i = 0; i < arr.length; i++) {
  concatArr = [].concat(concatArr, arr[i]);
  console.log(concatArr);
}

console.log(concatArr);

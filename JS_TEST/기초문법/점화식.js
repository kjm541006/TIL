// {
//   // 무지성 등차수열

//   let result;
//   function forloop(s, t, number) {
//     let acc = 0;

//     for (let i = 1; i <= number; i++) {
//       if (i == 1) acc += s;
//       else acc += t;
//       console.log(i, acc);
//     }

//     return acc;
//   }
//   result = forloop(3, 2, 5);
//   console.log(result);
// }

{
  // 재귀 등차수열

  let result;
  function recursive(s, t, number) {
    // 멈출 조건
    if (number == 1) {
      return s;
    }

    // recursive(3, 2, 5) -> recursive(3, 2, 4) + 2 -- (1)
    // recursive(3, 2, 4) -> recursive(3, 2, 3) + 2 -- (2)
    // recursive(3, 2, 3) -> recursive(3, 2, 2) + 2 -- (3)
    // recursive(3, 2, 2) -> recursive(3, 2, 1) + 2 -- (4)
    // recursive(3, 2, 1) -> 3
    // (4) -> 3 + 2 = 5
    // (3) -> 5 + 2 = 7
    // (2) -> 7 + 2 = 9
    // (1) -> 9 + 2 = 11

    // 반복할 코드
    return recursive(s, t, number - 1) + t;
  }

  result = recursive(3, 2, 5);
  console.log(result);
}

// {
//   // 무지성 등비수열

//   let result;
//   function forloop(s, t, number) {
//     let acc = 1;
//     for (let i = 1; i <= number; i++) {
//       if (i == 1) acc *= s;
//       else acc *= t;
//     }
//     return acc;
//   }

//   result = forloop(3, 2, 5);
//   console.log(result);
// }

{
  // 재귀 등비수열

  let result;
  function recursive(s, t, number) {
    if (number == 1) return s;

    return recursive(s, t, number - 1) * t;
  }

  result = recursive(3, 2, 5);
  console.log(result);
}

{
  // 팩토리얼 예제

  let result;
  function recursive(number) {
    if (number == 1) return 1;

    return recursive(number - 1) * number;
  }

  result = recursive(5);
  console.log(result);
}

{
  // 피보나치 수열 예제

  let result;

  function recursive(number) {
    if (number == 1 || number == 0) {
      return number;
    }

    // recursive(5) -> recursive(4) + recursive(3) -- (1)
    // recursive(4) -> recursive(3) + recursive(2) -- (2)
    // recursive(3) -> recursive(2) + recursive(1) -- (3)
    // recursive(2) -> recursive(1) + recursive(0) -- (4)
    // recursive(1) -> 1
    // recursive(0) -> 0
    // (4) recursive(2) = recursive(1) + recursive(0) = 1 + 0 -> 1
    // (3) recursive(3) = recursive(2) + recursive(1) = 1 + 1 -> 2
    // (2) recursive(4) = recursive(3) + recursive(2) = 2 + 1 -> 3
    // (1) recursive(5) = recursive(4) + recursive(3) = 3 + 2 -> 5

    return recursive(number - 1) + recursive(number - 2);
  }

  result = recursive(5);
  console.log(result);
}

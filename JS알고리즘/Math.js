// 최대 최소 절대값
{
  console.log(Math.max(1, 10, -3, 0, -1));
  console.log(Math.min(1, 10, -3, 0, -1));
  console.log(Math.abs(-3));
}

{
  let nums = [1, -1, 5, 23, 17, 4];
  console.log(Math.max(...nums));
  console.log(...nums);
  console.log(nums);
}

// 속성 및 랜덤
{
  console.log(Math.E);
  console.log(Math.PI);

  for (let i = 0; i < 3; i++) {
    console.log(Math.random());
  }

  for (let i = 0; i < 3; i++) {
    console.log(Number.parseInt(Math.random() * 10));
  }
}

// 제곱 제곱근 소수점처리
{
  console.log(Math.pow(2, 3)); // 8
  console.log(2 ** 3); // 8

  console.log(Math.sqrt(4)); // 2

  console.log(Math.round(3.5)); // 4 (반올림)
  console.log(Math.ceil(3.5)); // 4 (올림)
  console.log(Math.floor(3.5)); // 3 (내림)

  console.log(Math.round(3.4)); // 3
  console.log(Math.ceil(3.4)); // 4
  console.log(Math.floor(3.4)); // 3
}

{
  let billion1 = 1000000000;
  let billion2 = (1e9).toString();

  console.log(billion1 + typeof billion1);
  console.log(billion2 + typeof billion2);
}

{
  let num1 = 128.456;
  let num2 = 123.9876;

  console.log(num1 - num2);
  console.log((num1 - num2).toFixed(3)); // 반올림된 소수점 3째 자리 값
  console.log((num1 - num2).toPrecision(3)); // 정수 포함 반올림된 3자리
}

{
  let number = 123;
  console.log(Number.isNaN(number));
  console.log(Number.isFinite(number));
  console.log(Number.isFinite(Infinity));
}

{
  console.log(Number.parseInt("125px")); // 125
  console.log(Number.parseFloat("1.25em")); // 1.25
  console.log(Number.parseInt("1.25em")); // 1
}

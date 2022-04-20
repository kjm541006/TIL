// Date 객체는 1970년 1월 1일부터의 시간 차이를 밀리초로 나타내는 정수로 표현
{
  let dateNow = new Date(); // 현재 표준 시간 출력
  let dateStr = Date(); // 현재 지역 시간 출력
  let date1 = new Date(1000); // 1970-1-1부터의 밀리초가 지난 시간 출력

  console.log(dateNow);
  console.log(dateStr);
  console.log(date1);

  // month: 1월(0) ~ 12월(11)
  let dateParams1 = new Date(2021, 0, 1);
  console.log(dateParams1); // 2020-12-31 15시 (UTC 기준)
  let dateParamsUtc = new Date(Date.UTC(2021, 0, 1));
  console.log(dateParamsUtc); // 2021-1-1 출력
}

{
  let date = new Date();

  // 현재 UTC 출력
  console.log(date);

  // 현재 한국 시간 출력
  console.log(date.getFullYear()); // 년
  console.log(date.getMonth()); // 1월(0) 월
  console.log(date.getDate()); // 일
  console.log(date.getDay()); // 일요일(0) 요일
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(date.getTime()); // 현재 시간을 1970-1-1로 부터의 밀리세컨드로 출력
}

{
  function dateSub(oldDate, newDate) {
    return newDate - oldDate;
  }

  function getTimeSub(oldDate, newDate) {
    return newDate.getTime() - oldDate.getTime();
  }

  function benchmark(callbackFunc) {
    let date1 = new Date("2000-01-01");
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 1000000; i++) {
      callbackFunc(date1, date2);
    }
    return Date.now() - start;
  }

  console.log(`benchmark dateSub: ${benchmark(dateSub)}`);
  console.log(`benchmark getTimeSub: ${benchmark(getTimeSub)}`);

  let date1 = new Date("2000-01-01");
  let date2 = new Date();
  console.log(date1);
  console.log(date1.getTime());
}

let day_number = 1;
let day;

switch (day_number) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
  // break 사용 안하면 다음 줄 실행
  case 2:
    day = "Tuesday"; // output
    break;
}

console.log(day);

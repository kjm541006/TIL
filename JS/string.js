// 문자 표기 방법
{
  let str1 = "hello 1";
  let str2 = String("hello 2");
  let num = 3,
    str3 = `hello ${num}`;

  console.log(str1, str2, str3);
}

// 간단한 escape문
console.log(`line1\nline2`);
console.log(`line1\rline2`);
console.log(`tab1\ttab2`);
console.log("print \\");

// 문자열 길이
{
  let str = `hello
world
!!!`;

  console.log(str.length);
}

let str4 = "abcde";

console.log(str4.charAt(0));
console.log(str4.charCodeAt(0));
console.log(str4[0]);

// 탐색
{
  let text = "hello, world!";

  console.log(text.indexOf("l")); // 첫번째 l 탐색 후 index 반환
  console.log(text.indexOf("l", 5)); // 5번째 index 부터 탐색
  console.log(text.lastIndexOf("l")); // 마지막 부터 탐색 후 index 반환

  console.log(text.includes("HeLlo")); // 대소문자 구분함 -> false
  console.log(text.startsWith("ello", 1)); // index 1부터 시작 -> true
  console.log(text.endsWith("orld!")); // 마지막 문자열 체크 -> true
}

// 대문자 소문자 변환
{
  let str = "HelLo";
  console.log(str.toLowerCase());
  console.log(str.toUpperCase());
}

// 문자열 치환
{
  let text = "helLo, world!!!";
  let changed_text = "";

  changed_text = text.replace("world", "earth");
  console.log(changed_text);
  console.log(text);

  console.log(text.replace("!", "?"));
  console.log(text.replace("l", "i")); // 맨 처음 만나는 index만 치환

  // 정규표현식 활용 문자열 치환
  console.log(text.replace(/l/g, "i")); // /치환문자열/g -> 모든 index
  console.log(text.replace(/l/gi, "i")); // /치환문자열/i -> 대소문자 구분❌
}

console.log("-------------------------------------------");

// 문자열 추출
// slice(start,end), substring(start,end) --> 위치 기반 추출
// substr(start,length) --> 길이 기반 추출
{
  let text = "hello, world!!!";

  console.log(text.slice(0, 5)); // index 0부터 4까지 추출
  console.log(text.slice(4, 5)); // index 4부터 4까지 추출 = index 4 추출
  console.log(text.slice(-4)); // 뒤에서 4번째 문자부터 끝까지 추출
  console.log(text.slice(5)); // index 5 부터 끝까지 추출
  console.log(text.slice(2, 6)); // output : llo,
  console.log(text.slice(6, 2)); // output : ❌

  console.log(text.substring(2, 6)); // output : llo,
  console.log(text.substring(6, 2)); // output : llo,

  console.log(text.substr(2, 6));
}

// 문자열 분할
// split(Separator,limit) --> 배열로 문자열을 분할함
{
  let fruits = "apple, banana, melon";
  result = fruits.split(" ");
  console.log(result);
  console.log(result[0]);
  console.log(result[1]);
  result = fruits.split(" ", 2);
  console.log(result);

  let text = "hello";
  result = text.split("");
  console.log(result);
  result = text.split("", 3);
  console.log(result);
}

let arr1 = new Array(10);
let arr2 = [];

let fruits = ["apple", "banana", "orange"];
console.log(fruits);
console.log(fruits.length);

fruits.push("kiwi");
console.log(fruits);
console.log(fruits.length);
fruits.pop();
console.log(fruits);

fruits.unshift("kiwi");
console.log(fruits);
fruits.shift();
console.log(fruits);

fruits[1] = "melon";
console.log(fruits);

fruits.push("banana");
console.log(fruits);

{
  let num = 123.456;
  let str = "Here I am!";
  let fruits = ["apple", "orange", "melon"];

  console.log(Array.isArray(num)); // false
  console.log(Array.isArray(str)); // false
  console.log(Array.isArray(fruits)); // true

  console.log(fruits.length); // 3
  delete fruits[1];
  console.log(fruits);
  console.log(fruits.length); // 배열의 요소를 삭제해도 길이가 그대로인 문제
}
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// splice(index,deleteCount,element)
// splice 는 원본에서 뽑아오는 느낌
{
  let fruits = ["apple", "banana", "orange"];

  console.log(fruits.splice(1)); // ["banana", "orange"]
  console.log(fruits); // ["apple"]

  fruits = ["apple", "banana", "orange"];
  console.log(fruits.splice(1, 1)); // ["banana"]
  console.log(fruits); // ["apple", "orange"]

  fruits = ["apple", "banana", "orange"];
  let element = fruits.splice(1, 1, "mango", "kiwi");
  console.log(fruits);
  console.log(fruits.length);
  console.log(element);
}

// slice(start, end)
// slice는 원본에 영향 x
{
  let fruits = ["apple", "banana", "orange", "melon"];
  console.log(fruits.slice(1)); // ['banana', 'orange', 'melon']
  console.log(fruits); // 변화 없음

  console.log(fruits.slice(1, 3));
  console.log(fruits);
}

// concat 배열 합치기
{
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, "6"];

  console.log(arr1.concat(arr2));
  console.log(arr1);
}

// 배열 반복
// for (element of array)
// for (index in array)
{
  let fruits = ["apple", "oragne", "melon"];

  for (let i = 0; i < fruits.length; i++) {
    console.log(`fruits ${i + 1} : ${fruits[i]}`);
  }

  for (element of fruits) {
    console.log(element);
  }

  for (index in fruits) {
    console.log(fruits[index]);
  }
}

// 배열 탐색
// indexOf(item,from) --> 앞에서 부터 index 탐색
// includes(item, from) --> 값 포함 여부 확인
{
  let fruits = ["apple", "orange", "banana", "orange", "melon", 0];
  console.log(fruits.indexOf("orange")); // 1
  console.log(fruits.indexOf("Orange")); // -1 ->존재하지 않을 경우 -1 반환
  console.log(fruits.indexOf("orange", 2)); // 3 --> 2번째 index부터 탐색

  console.log(fruits.lastIndexOf("orange")); // 3
  console.log(fruits.lastIndexOf("orange", 2)); // 1
  console.log(fruits.lastIndexOf("orange", -4)); // 1

  console.log(fruits.includes("apple")); // true
  console.log(fruits.includes("Apple")); // false
  console.log(fruits.includes(0)); // true
}

// 배열 정렬
{
  let nums = [1, -1, 4, 5, 2, 0];
  console.log(nums.sort());
  console.log(nums.reverse());
}

// 배열 변환
// join() --> 배열을 문자열로 변환
{
  let fruits = ["apple", "orange", "banana", "melon"];
  let str = fruits.join().split(",");
  console.log(fruits);
  console.log(str);
  console.log(str === fruits); // false
}

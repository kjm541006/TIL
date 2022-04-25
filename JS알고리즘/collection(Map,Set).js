// Indexed Collection
// Array & Typed Array

// keyed Collection
// Object, Map, Set, Weak Map, Weak Set

// Map() -> 배열 내의 모든 요소에 대해 주어진 함수의 결과를 새로운 배열 반환
{
  let map = new Map();

  map.set("name", "john");
  map.set("age", 19);
  console.log(map);

  console.log(map.get("name"));
  console.log(map.get("age"));
  console.log(map.size);
}

{
  let recipeJuice = new Map([
    ["strawberry", 50],
    ["banana", 100],
    ["ice", 150],
  ]);

  for (let item of recipeJuice.keys()) console.log(item);
  for (let amount of recipeJuice.values()) console.log(amount);

  let recipeJuiceObj = Object.fromEntries(recipeJuice);
  let recipeJuiceKv = Object.entries(recipeJuiceObj);
  let recipeJuiceMap = new Map(recipeJuiceKv);

  console.log(recipeJuiceObj);
  console.log(recipeJuiceKv);
  console.log(recipeJuiceMap);
}

// Set -> ** value만 저장 ** 하며 중복 허용❌
{
  let set = new Set();
  let num = new Set([1, 2, 3, 4, 5]);
  let str = new Set("Hello!");

  console.log(set);
  console.log(num);
  console.log(str);

  set.add(1).add(1).add(10).add(20);
  console.log(set);

  console.log(num.has(2));

  set.delete(10);
  console.log(set);
}

{
  let str = new Set("Hello!");
  let num = new Set([1, 2, 3, 4, 5]);

  console.log(str);
  for (let i of str) console.log(i);
  for (let value of num) console.log(value);
}

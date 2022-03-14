let nums = [0, -1, 4, 10, 12, 3];

console.log(nums.sort((a, b) => a - b));
console.log(nums);

let ascending_order = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  // sort 수행(자리바꿈) return 1
  if (x > y) return 1;
  // sort 수행❌ return -1
  else if (y > x) return -1;
  else return 0;
};

let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort(ascending_order));

// forEach
{
  // use for loop
  let nums = [1, 2, 3];
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
  }

  // use forEach
  nums.forEach(function (i) {
    console.log(i);
  });
}

// map
{
  // use for loop
  let nums = [1, 2, 3, 4, 5];
  let use_for_loop = [];
  for (let i = 0; i < nums.length; i++) {
    use_for_loop.push(nums[i]);
  }
  console.log(use_for_loop);

  // use map
  let use_map = nums.map(function (item) {
    return item;
  });

  console.log(use_map);
}

// find ** 단 하나의 값만 반환 **
{
  let users = [
    { name: "bob", age: 17, job: false },
    { name: "alice", age: 20, job: false },
    { name: "john", age: 27, job: true },
  ];

  let find_job = users.find(function (user) {
    return user.job == false;
  });
  console.log(find_job);

  let find_age = users.find(function (user) {
    return user.age > 19;
  });
  console.log(find_age);
}

// filter ** 만족하는 조건의 모든 값을 배열로 반환 **
{
  let users = [
    { name: "bob", age: 17, job: false },
    { name: "alice", age: 20, job: false },
    { name: "john", age: 27, job: true },
  ];

  let filter_job = users.filter(function (user) {
    return user.job == false;
  });
  console.log(filter_job);

  let filter_age = users.filter(function (user) {
    return user.age > 19;
  });
  console.log(filter_age);
}

// reduce
{
  let nums = [1, 2, 3, 4, 5];
  let callCount = 0;

  console.log("result\tvalue\tindex");
  let sum = nums.reduce(function (accumulator, item, index, array) {
    console.log(accumulator, "\t\t", item, "\t\t", index);
    callCount++;
    return accumulator + item;
  }, 0);

  console.log(callCount);
  console.log(sum);
}

{
  const array1 = [1, 2, 3, 4];

  const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  console.log(sumWithInitial);
}

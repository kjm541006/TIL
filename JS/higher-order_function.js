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

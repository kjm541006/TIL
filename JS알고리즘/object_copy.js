let user = {
  name: "john",
  age: 27,
  sizes: {
    height: 180,
    weight: 70,
  },
};

//deep copy (stringify : Object -> String, parse : String -> Object)
let admin = JSON.parse(JSON.stringify(user));
user.sizes.height++;
console.log(`user.sizes : ${user.sizes.height}`);
console.log(`admin.sizes : ${admin.sizes.height}`);

/* swallow copy (object 안의 object는 복사 안됨)

1. for loop
2. let admin_swallow = Object.assign({}, user);*/
//3.
let admin_swallow = { ...user };
user.sizes.height = 180;
user.sizes.height++;
console.log(`user.sizes : ${user.sizes.height}`);
console.log(`admin_swallow.sizes : ${admin_swallow.sizes.height}`);

// 함수 선언식
function add1(x, y) {
  return x + y;
}

// 함수 표현식
const add2 = function (x, y) {
  return x + y;
};

// 화살표 함수
const add3 = (x, y) => x + y;

const add4 = add1;

console.log(add4(1, 3));

console.log(add1 == add2);
console.log(add1 == add4);

console.log(Object.getOwnPropertyDescriptors(add1));
console.log(Object.getOwnPropertyDescriptors(add2));
console.log(Object.getOwnPropertyDescriptors(add3));
console.log(Object.getOwnPropertyDescriptors(add4));

// method : 객체에 저장된 값이 함수인 경우 메서드 라고 부름
let list = [
  "john",
  27,
  function helloFunc() {
    console.log("hello");
  },
];

let obj = {
  name: "john",
  age: 27,
  helloFunc() {
    console.log("hello");
  },
};

function helloFunc() {
  console.log("hello");
}

list[2]();
obj.helloFunc();
helloFunc();

console.log(typeof list[2]);
console.log(typeof obj.helloFunc);
console.log(typeof helloFunc);

// this: 메서드에서 객체 내부의 속성값을 접근할 수 있는 지시자
let thisObj = {
  name: "john",
  age: 27,
  hiFunc() {
    console.log("hi " + this.name);
  },
};
thisObj.hiFunc();

let user = { name: "john" };
let admin = { name: "admin" };

function helloUser() {
  console.log("hello " + this.name);
}

user.func = helloUser;
admin.func = helloUser;

user.func();
admin.func();

user["func"]();
admin["func"]();

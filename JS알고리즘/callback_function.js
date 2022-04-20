// callback func
function callbackFunc() {
  console.log("Im callback function");
}

// higher-order func
function higherOrderFunc(callback) {
  console.log("Im higher funcion");
  callback();
}
higherOrderFunc(callbackFunc);

// calculator using callback func
function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}

function calculator(callback, x, y) {
  return callback(x, y);
}

console.log(calculator(add, 10, 3)); // 13
console.log(calculator(sub, 7, 5)); // 2

// call by value (값에 의한 복사) 원시 타입을 매개 변수로 넘긴 경우
{
  let a = 1;
  let add = function (b) {
    b = b + 1;
  };
  add(a); // b가 a의 값을 복사하지만 b의 값만 1이 추가되고 a의 값은 변화❌
  console.log(`a = ${a}`); // 1
}

// call by reference (주소에 대한 복사) 객체 타입을 매개 변수로 넘긴 경우
{
  let a = { v: 1 };
  let add = function (b) {
    b.v = b.v + 1;
  };
  add(a); // a와 b가 가르키는 주소가 같으므로 b가 바뀔때 a도 변화
  console.log(`a.v = ${a.v}`); // 2
}

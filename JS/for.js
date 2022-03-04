for (let i = 0; i < 1; i++) {
  console.log(i);
}

let num = 0;
for (; num < 2; ) {
  console.log(num);
  num++;
}

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

console.log("-------------------------------------------");

// for .. in ( for(key in  value) )
{
  const person = { name: "John", age: 25 };
  let text = "";
  for (let i in person) {
    text += person[i];
    console.log(`i = ${i}`);
    console.log(`typeof i = ${typeof i}`);
  }
  console.log(`result = ${text}`);
}

console.log("-------------------------------------------");

// for .. of ( for(variable of iterable) )
{
  let language = "Javascript";
  let text = "";

  for (let x of language) {
    console.log(x);
    text += x;
  }
  console.log(text);
}

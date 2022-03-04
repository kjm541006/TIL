// break
let text = "";

for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  text += i;
}
console.log(text); // output : 012

// continue
text = "";

for (let i = 0; i < 5; i++) {
  if (i === 3) continue; // i가 3인경우 skip
  text += i;
}
console.log(text); // output : 0124

// label  (label이 없을 경우 j for문만 break됨) (사용 지양)
label: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
    break label;
  }
} // output : 0 0

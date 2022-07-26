import React, { useState } from "react";

export default function Counter() {
  // 값, 값을 변경할 떄 쓰는 함수 state -> count, setState -> setCount, 초기값
  // const [set, setState] = useState(초기값);
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <br />
      Counter : {count}
    </div>
  );
}

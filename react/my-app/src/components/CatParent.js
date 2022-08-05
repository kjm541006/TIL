import React, { useRef, useState } from "react";
import Cat from "./Cat";

export default function CatParent() {
  console.log("부모 컴포넌트 CatParent");
  const catRef = useRef();
  console.log(catRef);

  const ageRef = useRef(1);
  console.log(ageRef.current);

  const [state, setState] = useState(1);

  return (
    <div>
      <h4> 고양이가 세상을 구한다 </h4>
      <div>
        <Cat ref={catRef} />
        <h4>나이 : {ageRef.current}</h4>
        <h4>리렌더링 횟수 : {state}</h4>
        <button onClick={() => alert(catRef.current.height)}>고양이의 사이즈를 알고싶어</button>
        <button onClick={() => (ageRef.current += 1)}>나이증가</button>
        <button onClick={() => setState(state + 1)}>리렌더링</button>
      </div>
    </div>
  );
}

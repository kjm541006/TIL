import React, { useRef, useState, useEffect } from "react";
import Cat from "./Cat";

export default function CatParent() {
  console.log("부모 컴포넌트 CatParent");
  // const catRef = useRef();
  // console.log(catRef);

  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [check, setCheck] = useState(false);

  const catCallbackRef = (node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  };

  useEffect(() => {
    document.title = `고양이의 나이는 ${age} 입니다.`;
  }, [age]);

  // const changeAge = () => {
  //   ageRef.current += 1;
  //   console.log(`age : ${ageRef.current}`);
  // };

  const changeAge = () => {
    setAge((age) => age + 1);
    console.log(age);
  };

  return (
    <div>
      <h4> 고양이가 세상을 구한다 </h4>
      <div>
        <Cat ref={catCallbackRef} />
        <h4>나이 : {age}</h4>
        <h4>키 : {check ? height : "비밀"}</h4>
        {check ? (
          <button onClick={() => setCheck(false)}>고양이의 키를 숨겨줘</button>
        ) : (
          <button onClick={() => setCheck(true)}>고양이의 키를 알고싶어</button>
        )}
        <button onClick={changeAge}>나이증가</button>
        {/* <button onClick={() => setState(state + 1)}>리렌더링</button> */}
      </div>
    </div>
  );
}

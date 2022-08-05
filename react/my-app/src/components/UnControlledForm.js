import React, { useRef } from "react";

// ref 사용 -> 비제어 컴포넌트 방식으로 form 다루기
export default function UncontrolledForm() {
  const inputRef = useRef();
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef);
    console.log(inputRef.current.value);
  };

  console.log(inputRef);

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임: </label>
      <input type="text" name="nickname" ref={inputRef} />
      <input type="submit" value="제출" />
    </form>
  );
}

import React, { useState } from "react";
import { useRouter } from "next/router";
import BottomButton from "../src/components/BottomButton";

export default function accessoryChoice() {
  const router = useRouter();
  const [selectedAccessory, setSelectedAccessory] = useState("");

  const onChangeHandler = (e) => {
    setSelectedAccessory(e.target.value);
  };

  console.log(selectedAccessory);

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">모니터와 키보드 중 원하는 장비를 선택해주세요.</h3>
      </div>
      <div>
        <input type="radio" id="monitor" name="device" value="monitor" onChange={onChangeHandler} />
        <label htmlFor="monitor">모니터</label>
      </div>
      <div>
        <input
          type="radio"
          id="keyboard"
          name="device"
          value="keyboard"
          onChange={onChangeHandler}
        />
        <label htmlFor="keyboard">키보드</label>
      </div>
      <BottomButton
        onClick={() => {
          router.push("./complete");
        }}
      >
        완료 화면으로 이동
      </BottomButton>
    </div>
  );
}

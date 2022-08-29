import React, { useState } from "react";
import { useRouter } from "next/router";
import BottomButton from "../src/components/BottomButton";

export default function deviceChoice() {
  const router = useRouter();
  const [selectedDevice, setSelectedDevice] = useState("");

  const onChangeHandler = (e) => {
    setSelectedDevice(e.target.value);
  };

  console.log(selectedDevice);

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">아이맥과 맥북 중 원하는 장비를 선택해주세요.</h3>
      </div>
      <div>
        <input type="radio" id="imac" name="device" value="imac" onChange={onChangeHandler} />
        <label htmlFor="imac">아이맥</label>
      </div>
      <div>
        <input type="radio" id="macbook" name="device" value="macbook" onChange={onChangeHandler} />
        <label htmlFor="macbook">맥북</label>
      </div>
      <BottomButton
        onClick={() => {
          router.push("./accessory-choice");
        }}
      >
        악세서리 선택화면 이동
      </BottomButton>
    </div>
  );
}

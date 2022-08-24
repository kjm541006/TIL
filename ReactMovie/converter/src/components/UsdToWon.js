import React, { useState } from "react";

export default function UsdToWon() {
  const [won, setWon] = useState(0);
  const [dollar, setDollar] = useState(0);

  const onChange = (e) => {
    setDollar(() => e.target.value);
    setWon(() => (e.target.value * 1345.36).toFixed(2));
  };

  return (
    <div>
      <h2>원화변환기</h2>
      <label htmlFor="change">달러 입력: </label>
      <input
        type="text"
        name="change"
        placeholder="달러 입력"
        value={dollar || ""}
        onChange={onChange}
      ></input>
      <br />
      <span>
        {dollar}달러는 {parseFloat(won)}원 입니다.
      </span>
    </div>
  );
}

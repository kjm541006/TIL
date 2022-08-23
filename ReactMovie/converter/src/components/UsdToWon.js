import React, { useState } from "react";

export default function UsdToWon() {
  const [won, setWon] = useState();
  const [dollar, setDollar] = useState();

  const onChange = (e) => {
    setWon(() => e.target.value);
    setDollar(() => (e.target.value / 1345.36).toFixed(3));
  };

  return (
    <div>
      <label htmlFor="change">원화변환기</label>
      <br />
      <input type="text" name="change" placeholder="원화 입력" value={won || ""} onChange={onChange}></input>
      <br />
      <span>
        {won}원은 {dollar}달러 입니다.
      </span>
    </div>
  );
}

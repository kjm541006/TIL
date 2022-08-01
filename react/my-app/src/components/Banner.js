import React, { useState } from "react";

const Banner = () => {
  const [visible, setVisible] = useState(true);

  const closeBanner = (e) => {
    e.stopPropagation(); // event bubbling 방지
    setVisible(false);
  };
  const getCoupon = () => {
    return alert("당첨");
  };

  return (
    visible && (
      <div
        style={{
          backgroundColor: "orange",
          fontWeight: "bold",
          height: "50px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        onClick={getCoupon}
      >
        이 곳을 클릭해서 쿠폰을 받아가세요.
        <button onClick={closeBanner}>닫기</button>
      </div>
    )
  );
};

export default Banner;

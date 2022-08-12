import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navigator() {
  const navigate = useNavigate();

  return (
    <div>
      <h3 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        Go to MainPage
      </h3>
    </div>
  );
}

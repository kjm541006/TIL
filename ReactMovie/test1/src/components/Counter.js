import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Click Me!</button>
      <button onClick={resetCount}>Reset!</button>
      <br />
      <span>Clicks : {count}</span>
    </div>
  );
}

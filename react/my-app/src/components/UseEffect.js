import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times!`;
  }, [count]);
  return (
    <div>
      <h1>You clicked {count} times!</h1>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </div>
  );
}

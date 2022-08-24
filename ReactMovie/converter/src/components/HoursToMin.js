import React, { useState } from "react";

export default function HoursToMin() {
  const [hour, setHour] = useState(0);
  const [flipped, setflipped] = useState(false);

  const reset = () => {
    setHour(0);
  };

  const onFlip = () => {
    setflipped((current) => !current);
  };
  const onChange = (e) => {
    setHour(e.target.value);
  };

  return (
    <div>
      <h2>Hours to Minutes</h2>
      <label htmlFor="hour">
        <span>Hours</span>
        <input
          type="text"
          name="hour"
          id="hour"
          value={flipped === false ? hour : hour / 60}
          onChange={onChange}
          disabled={flipped === true}
        ></input>
      </label>
      <label>
        <span>Minutes</span>
        <input
          type="text"
          name="minute"
          onChange={onChange}
          value={flipped === false ? hour * 60 : hour}
          disabled={flipped === false}
        ></input>
      </label>
      <br />
      <button onClick={onFlip}>flip</button>
      <br />
      <button onClick={reset}>reset</button>
    </div>
  );
}

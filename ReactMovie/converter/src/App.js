import HoursToMin from "./components/HoursToMin";
import KmToMiles from "./components/KmToMiles";
import UsdToWon from "./components/UsdToWon";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState("select");

  const onSelect = (e) => {
    console.log(e.target.value);
    setIndex(e.target.value);
  };

  return (
    <div>
      <h1>Super Converter</h1>
      {/* <HoursToMin /> */}
      {/* <KmToMiles /> */}
      {/* <UsdToWon /> */}

      <label htmlFor="data">변환기 : </label>
      <select value={index} id="data" onChange={onSelect}>
        <option value="select">변환기를 고르세요</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
        <option value="2">Usd to Won</option>
      </select>

      {index === "0" ? <HoursToMin /> : null}
      {index === "1" ? <KmToMiles /> : null}
      {index === "2" ? <UsdToWon /> : null}
    </div>
  );
}

export default App;

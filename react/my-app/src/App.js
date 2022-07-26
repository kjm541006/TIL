import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  const info = {
    firstName: "Jumin",
    lastName: "Kim",
    withImg: true,
    name: "jumin",
  };
  return (
    <div className="App">
      <Header title={"Learn React A"} boxNum={1} />
      <Header title={"Learn React B"} boxNum={2} />
      <Header title={"Learn React C"} boxNum={3} />
      {/* <Welcome firstName={"Jumin"} lastName={"Kim"} withImg name={"jumin"} /> */}
      <Welcome {...info} />
    </div>
  );
}

export default App;

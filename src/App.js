import React from "react";
import WunderSlider from "./WunderSlider/WunderSlider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Rheostat</h1>
      <WunderSlider min={1} max={100} values={[30, 90]} />
    </div>
  );
}

export default App;

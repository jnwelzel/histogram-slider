import React from "react";
import Rheostat from "rheostat";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Rheostat</h1>
      <Rheostat min={1} max={100} values={[1, 100]} />
    </div>
  );
}

export default App;

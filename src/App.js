import React from "react";
import RangeFilter from "./components/RangeFilter.js/RangeFilter";
import "./App.css";

const HISTOGRAM_DATA = [];

const App = () => {
  return (
    <div className="App">
      <h1>Rheostat</h1>
      <p style={{ marginBottom: 30 }}>
        <a
          href="https://github.com/airbnb/rheostat"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github
        </a>
      </p>
      <RangeFilter min={1} max={100} values={[30, 90]} />
    </div>
  );
};

export default App;

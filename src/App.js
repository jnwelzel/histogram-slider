import React from "react";
import RangeFilter from "./components/RangeFilter.js/RangeFilter";
import "./App.css";

const HISTOGRAM_DATA = {
  priceHistogram: [
    { price: 88800, count: 2 },
    { price: 98800, count: 5 },
    { price: 99800, count: 15 },
    { price: 109800, count: 35 },
    { price: 120000, count: 42 },
    { price: 130000, count: 22 },
    { price: 135000, count: 18 },
    { price: 142000, count: 15 },
    { price: 153000, count: 12 },
    { price: 169000, count: 19 },
    { price: 171000, count: 11 },
    { price: 221000, count: 9 },
    { price: 249999, count: 6 },
    { price: 288800, count: 1 },
  ],
  priceMin: 88800,
  priceMax: 288800,
};

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
      <RangeFilter
        min={HISTOGRAM_DATA.priceMin}
        max={HISTOGRAM_DATA.priceMax}
        values={[HISTOGRAM_DATA.priceMin, HISTOGRAM_DATA.priceMax]}
        showHistogram
        histogramRange={HISTOGRAM_DATA.priceHistogram}
      />
    </div>
  );
};

export default App;

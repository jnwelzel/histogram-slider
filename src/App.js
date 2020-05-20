import React, { useState } from "react";
import RangeFilter from "./components/RangeFilter/RangeFilter";
import "./App.css";

const HISTOGRAM_DATA = {
  priceHistogram: [
    { price: 888, count: 1 },
    { price: 1200, count: 3 },
    { price: 1500, count: 4 },
    { price: 1600, count: 2 },
    { price: 1700, count: 8 },
    { price: 1800, count: 4 },
    { price: 1900, count: 5 },
    { price: 2000, count: 15 },
    { price: 2100, count: 35 },
    { price: 2200, count: 25 },
    { price: 2300, count: 42 },
    { price: 2400, count: 22 },
    { price: 2500, count: 18 },
    { price: 3000, count: 15 },
    { price: 4000, count: 11 },
    { price: 6000, count: 12 },
    { price: 7000, count: 19 },
    { price: 8000, count: 11 },
    { price: 9000, count: 9 },
    { price: 10000, count: 6 },
    { price: 12000, count: 1 },
  ],
  priceMin: 888,
  priceMax: 12000,
  countMax: 42,
};

const App = () => {
  const [showHistogram, setShowHistogram] = useState(true);

  const toggleShowHistogram = () => {
    setShowHistogram(!showHistogram);
  };

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
        minValue={HISTOGRAM_DATA.priceMin}
        maxValue={HISTOGRAM_DATA.priceMax}
        maxCount={HISTOGRAM_DATA.countMax}
        values={[HISTOGRAM_DATA.priceMin, HISTOGRAM_DATA.priceMax]}
        showHistogram={showHistogram}
        histogramRange={HISTOGRAM_DATA.priceHistogram}
      />
      <div style={{ borderTop: "1px solid #ddd", marginTop: "30px" }}>
        <p>
          <input
            onChange={toggleShowHistogram}
            checked={showHistogram}
            id="showHistogram"
            name="showHistogram"
            type="checkbox"
          />
          <label htmlFor="showHistogram">Show histogram</label>
        </p>
      </div>
    </div>
  );
};

export default App;
